import React from "react";
import './GameForm.css';

const RemoveGame = ({game, setGames}) => {

    const remove = async (name) => {
        setGames((oldGames) => oldGames.filter((t) => t !== name));
      };

    return (
        <div id="foo">
            <ul>
                <>
                    {game.map((games) => (
                        <>
                            <li className="content">{games}</li>
                            <button className="delete-btn" onClick={() => remove(games)}>
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