import React, { useState } from "react";
import './App.css';
import GameForm from "./components/GameForm";
import GetRandom from "./components/GetRandom";
import RemoveGame from "./components/RemoveGame";

function App() {

  const [game, setGames] = useState([]);


  return (
    <div className="App" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/game.jpg'})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }}>
      <h1>Vad ska vi spela idag?</h1>
      <div className="grid-container">
        <div className="grid-content">
          <GetRandom game={game} />
        </div>
        <div className="grid-content">
          <GameForm game={game} setGames={setGames} />
        </div>
        <div className="three">
          <h4>vilka val har vi?</h4>
          <RemoveGame game={game} setGames={setGames} />
        </div>

      </div>
    </div>
  );
}

export default App;
