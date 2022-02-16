import React, { useState } from "react";
import './GameForm.css';

const GameForm = ({game, setGames}) => {

    const [input, setInput] = useState("");
    
    const addGame = async (event) => {
        event.preventDefault();
        // const newGame = [input]
        const newGame = {name: input, counter: 0}
    
        setGames([...game, newGame]);
        setInput("");
      };

      const handleInputChange = (event) => {
        setInput(event.target.value);
      };

    return (
        <div>
            <form onSubmit={addGame}>
                <input
                    value={input}
                    autoComplete="off"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                />
                <button className="btn-form" type="submit">Add Game</button>
            </form>
        </div>
    )
};

export default GameForm;