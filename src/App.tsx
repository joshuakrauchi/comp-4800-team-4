import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnboardPage from "./pages/OnboardPage";
import MapPage from "./pages/MapPage";
import { QRLanding } from "./components/QRLanding/QRLanding"

import AllStampsEarned from "./pages/AllStampsEarned";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={"/*"} element={<OnboardPage />} />
        <Route path={"/map"} element={<MapPage />} />
        <Route path={"/qr"} element={<QRLanding />} />
        <Route path={"/DownloadTheApp"} element={<AllStampsEarned />} />
      </Routes>
    </Router>
  );
};

export default App;
