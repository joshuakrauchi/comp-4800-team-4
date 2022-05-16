import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnboardPage from "./pages/OnboardPage";
import MapPage from "./pages/MapPage";
import DemoARPage from "./pages/DemoARPage";
import BadgeModal from "./components/BadgeModal/BadgeModal";

import boulder from "./images/boulder.png";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<OnboardPage />} />
        <Route path={"/map"} element={<MapPage />} />
        <Route path={"/ar"} element={<DemoARPage />} />
        <Route path={"/badge"} element={<BadgeModal badge={boulder} badgeName="Young Crab"/>} />
        <Route path={"/qr"} element={<div>does not exist</div>} />
        <Route path={"/trivia"} element={<div>does not exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
