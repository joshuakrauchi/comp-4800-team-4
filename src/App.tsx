import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import DemoARPage from "./pages/DemoARPage";
import BadgeModal from "./components/BadgeModal/BadgeModal";
import AllStampsEarned from "./pages/AllStampsEarned";
import boulder from "./images/boulder.png";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<MapPage />} />
        <Route path={"/ar"} element={<DemoARPage />} />
        <Route path={"/badge"} element={<BadgeModal badge={boulder} badgeName="Young Crab"/>} />
        <Route path={"/qr"} element={<div>does not exist</div>} />
        <Route path={"/trivia"} element={<div>does not exist</div>} />
        <Route path={"/DownloadTheApp"} element={<AllStampsEarned/>} />
      </Routes>
    </Router>
  );
};

export default App;
