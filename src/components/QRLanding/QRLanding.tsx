import { useBadge } from "../../context/BadgeContext";
import BadgeModal from "../BadgeModal/BadgeModal";
import Quiz from "../Quiz/quiz";
import "../../styles/quiz.css";
import {useState} from 'react';
import OnboardPage from "../../pages/OnboardPage";

abstract class BadgeProp {
  badge?: string;
  badgeName?: string;
  callback?: () => void;
} 

export const QRLanding = (props: BadgeProp): JSX.Element => {
  const { CheckBadge, AddBadge } = useBadge();
  const [ state, setState ] = useState("");

  if (/* Check localstorage for if you have been to the onboarding page */<></>) {
    return (<OnboardPage/>);
  }

  if (!CheckBadge(props.badgeName)) {
    return (
      <Quiz badgeName={props.badgeName} setState={() => {setState("JustCompleted")}} AddBadge={() => {AddBadge(props.badgeName)}}/>
    );
  }

  if (state == "Incomplete") {
    return (
      <Quiz badgeName={props.badgeName} setState={() => {setState("Complete")}} AddBadge={() => {}}/>
    );
  }

  return (
    <BadgeModal badge={props.badge} badgeName={props.badgeName} callback={() => {window.location.href="/"}} retake={() => {setState("Incomplete")}} previous={state}/>
  );
};