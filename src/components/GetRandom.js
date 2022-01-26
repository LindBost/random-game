import React, { useState } from "react";

const GetRandom = ({game}) => {
    const [random, setRandom] = useState([]);

    const handleRandom = () => {
        const randomItem = game[Math.floor(Math.random() * game.length)];
        setRandom(randomItem);
      };

    return (
        <div>
            <button onClick={handleRandom}>get random</button>
            <p>{random}</p>
        </div>
    )
};

export default GetRandom;