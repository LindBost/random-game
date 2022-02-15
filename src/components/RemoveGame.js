import React from "react";
import './RemoveGame.css';

const RemoveGame = ({game, setGames}) => {

    const remove = async (name) => {
        setGames((oldGames) => oldGames.filter((t) => t !== name));
      };

    return (
            <ul className="list">
                <>
                    {game.map((games) => (
                        <div className="content-list">
                            <li className="content">{games}</li>
                            <button className="delete-btn" onClick={() => remove(games)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </>
            </ul>
    )
};

export default RemoveGame;