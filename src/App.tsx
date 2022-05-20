import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage/MapPage";
import { QRLanding } from "./pages/QRLanding/QRLanding";
import AllStampsEarned from "./pages/AllStampsEarned/AllStampsEarned";
import { useBadge } from "./context/BadgeContext";
import ClearProgressPage from "./pages/ClearProgressPage/ClearProgressPage";

const App = (): JSX.Element => {
  const { hasFoundAllBadges } = useBadge();
  const styles = {
    container: "flex justify-center",
    secondContainerBecauseWebDevDoBeLikeThat: "max-w-screen-sm w-full",
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondContainerBecauseWebDevDoBeLikeThat}>
        <Router>
          {hasFoundAllBadges() ? (
            <Routes>
              <Route path={"/*"} element={<AllStampsEarned />} />
              <Route path={"/clearprogress"} element={<ClearProgressPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={"/*"} element={<QRLanding />} />
              <Route path={"/map"} element={<MapPage />} />
              <Route path={"/end"} element={<AllStampsEarned />} />
              <Route path={"/clearprogress"} element={<ClearProgressPage />} />
            </Routes>
          )}
        </Router>
      </div>
    </div>
  );
};

export default App;
