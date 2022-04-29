import "./styles/App.css";
import Button from "./components/Button";
import BadgeMap from "./components/BadgeMap/BadgeMap";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BadgeMap />
      <Button />
    </div>
  );
};

export default App;
