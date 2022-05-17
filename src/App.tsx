import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import BadgeModal from "./components/BadgeModal/BadgeModal";
import { QRLanding } from "./components/QRLanding/QRLanding"

import boulder from "./images/boulder.png";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<MapPage />} />
        <Route path={"/badge"} element={<QRLanding badge={boulder} badgeName="Three" callback={() => {window.location.href="/"}}/>} />
        <Route path={"/qr"} element={<div>does not exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
