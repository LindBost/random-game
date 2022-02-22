import React from "react";
import './RemoveGame.css';

const RemoveGame = ({ game, setGames }) => {

    const remove = async (name) => {
        setGames((oldGames) => oldGames.filter((t) => t !== name));
    };



    const addRating = async (games) => {
        console.log('updateRating', games)

        const newGame = game.map((value) => {
            if (value.name === games.name) {
                const newAlex = { ...value, counter: value.counter + 1 }

                return newAlex;
            }
            else {
                return value;
            }
        })

        setGames(newGame)
    }

    console.log('all state games: ', game)
    return (
        <ul className="list">
            <>
                {game.map((games) => {
                    console.log('games!!', games.name);
                    return <div className="content-list">
                        <li key={games.name} className="content">{games.name}{games.counter}</li>
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
