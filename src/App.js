import "./App.css";
import Leaderboard from "./components/leaderboard/Leaderboard";
import AddScorePopup from "./components/addScorePopup/AddScorePopup";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Leaderboard />
      {/* <AddScorePopup /> */}
    </div>
  );
}

export default App;
