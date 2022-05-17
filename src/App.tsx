import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import BadgeModal from "./components/BadgeModal/BadgeModal";

import boulder from "./images/boulder.png";
import { useBadge } from "./context/BadgeContext";

const App = (): JSX.Element => {
  const { AddBadge } = useBadge();
  AddBadge("One");
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<MapPage />} />
        <Route path={"/badge"} element={<BadgeModal badge={boulder} badgeName="Young Crab" callback={() => {window.location.href="/"}}/>} />
        <Route path={"/qr"} element={<div>does not exist</div>} />
        <Route path={"/trivia"} element={<div>does not exist</div>} />
        <Route path={"/trivia2"} element={<div>does not exist</div>} />
        <Route path={"/trivia3"} element={<div>does not exist</div>} />
        <Route path={"/trivia4"} element={<div>does not exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
