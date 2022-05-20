import { useBadge } from "../../context/BadgeContext";
import BadgeModal from "../BadgeModal/BadgeModal";
import Quiz from "../Quiz/quiz";
import "../../styles/quiz.css";
import { useState, useRef } from "react";
import OnboardPage from "../../pages/OnboardPage";

abstract class BadgeProp {}

export const QRLanding = (props: BadgeProp): JSX.Element => {
  const badgeName = useRef("Zoea");
  const { AddBadge, IsBadgeValid, HasBadgeBeenCollected, onboardingComplete } =
    useBadge();
  const [currentBadgeState, setCurrentBadgeState] = useState("AlreadyCompleted");

  if (!onboardingComplete) {
    console.log(onboardingComplete);
    return <OnboardPage />;
  }

  if (!IsBadgeValid(badgeName.current)) {
    window.location.href = "/map";
    return <></>;
  }

  if (false &&
    !HasBadgeBeenCollected(badgeName.current) ||
    currentBadgeState === "Retaking"
  ) {
    return (
      <Quiz
        badgeName={badgeName.current}
        onComplete={(hasWonQuiz: boolean) => {
          if (currentBadgeState === "Retaking") {
            setCurrentBadgeState("AlreadyCompleted");
          } else if (hasWonQuiz) {
            setCurrentBadgeState("JustCompleted");
            AddBadge(badgeName.current);
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
