import React, { useState } from "react";

const RemoveGame = ({game, setGames}) => {

    const remove = async (name) => {
        setGames((oldGames) => oldGames.filter((t) => t !== name));
      };

    return (
        <div>
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
    )
};

export default RemoveGame;