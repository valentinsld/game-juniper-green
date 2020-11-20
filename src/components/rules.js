import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { new_game } from "../actions/actions-types";

const Rules = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Le jeu possède trois règles :</h2>

      <ul>
        <li>Le Joueur 1 choisit un nombre entre 1 et 100.</li>
        <li>
          À tour de rôle, chaque joueur doit choisir un nombre parmi les
          multiples ou les diviseurs du nombre choisi précédemment par son
          adversaire et inférieur à 100.
        </li>
        <li>Un nombre ne peut être joué qu'une seule fois.</li>
      </ul>

      <p>
        Le perdant étant le joueur qui ne trouve plus de multiples ou de
        diviseurs communs au nombre précédemment choisi.
      </p>

      <Link to="/game" onClick={() => dispatch(new_game())}>
        Jouer
      </Link>
    </div>
  );
};

export default Rules;
