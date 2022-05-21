import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { useBadge } from "../../context/BadgeContext";
import BadgeModal from "../BadgeModal/BadgeModal";
import OnboardPage from "../../pages/OnboardPage";
import Quiz from "../Quiz/Quiz";

abstract class BadgeProp {}

export const QRLanding = (props: BadgeProp): JSX.Element => {
  const [searchParams] = useSearchParams();
  const badgeName = useRef(searchParams.get("badge") || "");
  const {
    addBadge,
    isBadgeValid,
    hasBadgeBeenCollected,
    isOnboardingComplete,
  } = useBadge();
  const [currentBadgeState, setCurrentBadgeState] =
    useState("AlreadyCompleted");
  
  if (!isOnboardingComplete) {
    return <OnboardPage retake={() => {setState("Incomplete")}} status={"Scanned"}/>;
  }

  if (!isBadgeValid(badgeName.current)) {
    window.location.href = "/map";
    return <></>;
  }

  if (
    currentBadgeState !== "FailedQuiz" &&
    (!hasBadgeBeenCollected(badgeName.current) ||
      currentBadgeState === "Retaking")
  ) {
    return (
      <Quiz
        badgeName={badgeName.current}
        onComplete={(hasWonQuiz: boolean) => {
          if (
            currentBadgeState === "Retaking" &&
            hasBadgeBeenCollected(badgeName.current)
          ) {
            setCurrentBadgeState("AlreadyCompleted");
          } else if (hasWonQuiz) {
            addBadge(badgeName.current);
            setCurrentBadgeState("JustCompleted");
          } else if (!hasWonQuiz) {
            setCurrentBadgeState("FailedQuiz");
          }
        }}
      />
    );
  }

  return (
    <BadgeModal
      badgeName={badgeName.current}
      retake={() => {
        setCurrentBadgeState("Retaking");
      }}
      currentBadgeState={currentBadgeState}
    />
  );
};
