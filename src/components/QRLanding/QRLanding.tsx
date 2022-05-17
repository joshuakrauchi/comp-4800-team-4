import { useBadge } from "../../context/BadgeContext";
import BadgeModal from "../BadgeModal/BadgeModal";
import Quiz from "../Quiz/quiz";
import boulder from "../../images/boulder.png";
import "../../styles/quiz.css";

abstract class BadgeProp {
  badge?: string;
  badgeName?: string;
  callback?: () => void;
} 

export const QRLanding = (props: BadgeProp): JSX.Element => {
  const { CheckBadge } = useBadge();

  if (CheckBadge(props.badgeName)) {
    return (
      <Quiz/>
    );
  }

  return (
    <BadgeModal badge={boulder} badgeName="Three" callback={() => {window.location.href="/"}}/>
  );
};