import React, { useState } from "react";
import './RemoveGame.css';

const RemoveGame = ({ game, setGames }) => {

     const [count, setCount] = useState(0);

    const remove = async (name) => {
        setGames((oldGames) => oldGames.filter((t) => t !== name));
    };

    const addRating = async (games) => {
        console.log('updateRating', games)

         setGames(oldGames => oldGames.map((t) => {
             console.log('t', t)
             if(t.name === games.name) {
                setCount(count + 1); 
             }
             return t;
         }))  

        // setCount(count + 1);
        // console.log('count', count)
        // const updatedGame = { name: game, counter: count };
        //setGames([...game, updatedGame]);
       // console.log('game', game)
    }
      console.log('count', count)
    return (
        <ul className="list">
            <>
                {game.map((games) => {
                    console.log('games!!', games.name);
                    return <div className="content-list">
                        <li key={games.name}className="content">{games.name}</li>
                        {/* <button className="delete-btn" onClick={() => setCount(count + 1)}>counter</button> */}
                        <button className="delete-btn" onClick={() => addRating(games)}>counter</button>
                        <button className="delete-btn" onClick={() => remove(games)}>
                            Delete
                        </button>
                    </div>
                })}
            </>
        </ul>
    )
};

export default RemoveGame;