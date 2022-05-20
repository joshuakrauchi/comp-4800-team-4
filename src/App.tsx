import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import { QRLanding } from "./components/QRLanding/QRLanding"

import AllStampsEarned from "./pages/AllStampsEarned";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<QRLanding />} />
        <Route path={"/map"} element={<MapPage />} />
        <Route path={"/end"} element={<AllStampsEarned />} />
      </Routes>
    </Router>
  );
};

export default App;
