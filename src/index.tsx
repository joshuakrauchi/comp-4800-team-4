import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import BadgeProvider from "./context/BadgeContext";
import Quiz from "./components/Quiz/Quiz2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BadgeProvider>
      <Quiz badgeName="One" onComplete={() => true}/>
    </BadgeProvider>
  </React.StrictMode>
);
