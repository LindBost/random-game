import React, { useState } from "react";
import './GetRandom.css';

const GetRandom = ({game}) => {
    const [random, setRandom] = useState([]);

    const handleRandom = () => {
        const randomItem = game[Math.floor(Math.random() * game.length)];
        setRandom(randomItem);
      };

    return (
        <div className="random-container">
            <button className="btn" onClick={handleRandom}>get random</button>
            <p>{random.name}</p>
        </div>
    )
};

export default GetRandom;