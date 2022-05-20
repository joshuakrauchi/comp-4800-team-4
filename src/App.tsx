import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MapPage from "./pages/MapPage";
import { QRLanding } from "./components/QRLanding/QRLanding";

import AllStampsEarned from "./pages/AllStampsEarned";
import { useBadge } from "./context/BadgeContext";

const App = (): JSX.Element => {
  const { hasFoundAllBadges } = useBadge();
  const styles = {
    container: "flex justify-center",
    secondContainerBecauseWebDevDoBeLikeThat: "max-w-screen-sm w-full",
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondContainerBecauseWebDevDoBeLikeThat}>
        {hasFoundAllBadges() ? (
          <AllStampsEarned />
        ) : (
          <Router>
            <Routes>
              <Route path={"/*"} element={<QRLanding />} />
              <Route path={"/map"} element={<MapPage />} />
              <Route path={"/end"} element={<AllStampsEarned />} />
            </Routes>
          </Router>
        )}
      </div>
    </div>
  );
};

export default App;
