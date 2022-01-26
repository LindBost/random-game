import React, { useState } from "react";
import './App.css';

function App() {

  const [random, setRandom] = useState([]);
  const [game, setGames] = useState([]);
  const [input, setInput] = useState("");

  const handleRandom = () => {
    const randomItem = game[Math.floor(Math.random() * game.length)];
    setRandom(randomItem);
  };

  const addGame = async (event) => {
    event.preventDefault();
    const newGame = [input];

    setGames([...game, newGame]);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const remove = async (name) => {
    setGames((oldGames) => oldGames.filter((t) => t !== name));
  };

  console.log("kolla", game);

  return (
    <div className="App">
    <button onClick={handleRandom}>get random</button>
    <p>{random}</p>
    <form onSubmit={addGame}>
      <input
        value={input}
        autoComplete="off"
        type="text"
        name="name"
        onChange={handleInputChange}
      />
      <button type="submit">Add Game</button>
    </form>
    <p>{game.name}</p>
    <h4>vilka val har vi</h4>
    <ul>
      <>
        {game.map((games) => (
          <>
            <li>{games}</li>
            <button className="App-button" onClick={() => remove(games)}>
              Delete
            </button>
          </>
        ))}
      </>
    </ul>
  </div>
  );
}

export default App;
