import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./App";
import BadgeProvider from "./context/BadgeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BadgeProvider>
      <App />
    </BadgeProvider>
  </React.StrictMode>
);
