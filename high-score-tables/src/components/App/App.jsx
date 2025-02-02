import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import ToggleButton from "../Toggle/toggle.jsx";
import { useState } from "react";
import "./App.scss";

const App = () => {
  const [isDescending, setIsDescending] = useState(false);
  const toggleSort = () => {
    setIsDescending((prevState) => !prevState);
  };

  const sortedScores = scores.map(({ name, scores }) => ({
    name,
    scores: scores.sort((a, b) => {
      return isDescending ? b.s - a.s : a.s - b.s;
    }),
  }));

  return (
    <div className="app">
      <ToggleButton onClick={toggleSort} isDescending={isDescending} />
      <header className="app__header">
        <h1 className="app__heading">High Scores</h1>
      </header>
      {sortedScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, scores }, index) => (
          <HighScoreTable country={name} scores={scores} key={index} />
        ))}
    </div>
  );
};

export default App;
