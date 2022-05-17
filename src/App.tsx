import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import BadgeModal from "./components/BadgeModal/BadgeModal";

import boulder from "./images/boulder.png";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<MapPage />} />
        <Route path={"/badge"} element={<BadgeModal badge={boulder} badgeName="Young Crab" callback={() => {console.log("Why tho");}}/>} />
        <Route path={"/qr"} element={<div>does not exist</div>} />
        <Route path={"/trivia"} element={<div>does not exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
