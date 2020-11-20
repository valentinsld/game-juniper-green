import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { new_game, test_played } from "../actions/actions-types";

import GameForm from "./game-form";

const Game = () => {
  const { numbersPlayed, started, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "") {
      dispatch(test_played());
    }

    // scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  }, [numbersPlayed]);

  return (
    <div>
      <Link to="/">Retour acceuil</Link>

      {/* Liste des coups */}
      <ul>
        {numbersPlayed.map((e, i) => (
          <li key={i}>
            {e.player} : {e.value}
          </li>
        ))}
      </ul>

      {/* Formulaire */}
      {started && <GameForm />}

      {/* Messages */}
      <p>
        <strong>{message}</strong>
      </p>
      {!started && (
        <button onClick={() => dispatch(new_game())}>Rejouer</button>
      )}
    </div>
  );
};

export default Game;
