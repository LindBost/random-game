import React, { useState } from "react";
import './App.css';
import GameForm from "./components/GameForm";
import GetRandom from "./components/GetRandom";
import RemoveGame from "./components/RemoveGame";

function App() {

  const [game, setGames] = useState([]);

  return (
    <div className="App">
      <div className="grid-container">
        <GetRandom game={game} />
        <GameForm game={game} setGames={setGames} />
        <div className="three">
          <h4>vilka val har vi?</h4>
          <RemoveGame game={game} setGames={setGames} />
        </div>
      </div>
    </div>
  );
}

export default App;
