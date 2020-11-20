import { NEW_GAME, SET_NUMBER, TEST_PLAYED } from "../constantes/actions";
import { LOOSE, WIN, IMPOSSIBLE, PLAYER, COMPUTER } from "../constantes/texts";
import { NUMBERS } from "../constantes/table";

// Source de vérité
const stateInit = {
  numbers: Array.from({ length: NUMBERS }, (_, i) => i + 1), // array 1 to 100
  numbersPlayed: [],
  started: true,
  message: "",
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    // Réinitilisaiser les paramètre pour une nouvelle partie
    //////////////////////////////////////
    case NEW_GAME:
      return stateInit;

    // Le joueur joue
    //////////////////////////////////////
    case SET_NUMBER:
      const { value } = action.payload;
      const lastNumber =
        state.numbersPlayed[state.numbersPlayed.length - 1] !== undefined
          ? state.numbersPlayed[state.numbersPlayed.length - 1].value
          : 1;

      // Vérification :
      // Si la valeur n'est pas un multiple ou un diviseurs
      if (value % lastNumber !== 0 && lastNumber % value !== 0) {
        return {
          ...state,
          message: LOOSE, // You Loose !
          started: false,
        };
      }

      // Algorithme Computer :
      // on duplique l'array state.numbers
      // puis on le réoganise de manière alétoire (x3 pour bien mélanger)
      // on enelève la valeur du joueur
      const computerTab = [...state.numbers]
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .sort(() => 0.5 - Math.random())
        .filter(function (v, i, arr) {
          return v !== Number(value);
        });

      let computerNumber = false;

      // on teste chaque valeurs
      // si une valeur est trouvé, la boucle s'arrete
      computerTab.every(function (num, index) {
        if (num % value === 0 || value % num === 0) {
          computerNumber = num;
          return false;
        } else {
          return true;
        }
      });

      // If Computer loose
      if (!computerNumber) {
        return {
          ...state,
          numbers: state.numbers.filter(function (v, i, arr) {
            return v !== Number(value);
          }),
          numbersPlayed: state.numbersPlayed.concat({ player: PLAYER, value }),
          message: WIN, // YOU WIN
          started: false,
        };
      }

      // Computer find number
      return {
        ...state,
        numbers: state.numbers.filter(function (v, i, arr) {
          return v !== Number(value) && v !== Number(computerNumber);
        }),
        numbersPlayed: state.numbersPlayed.concat(
          { player: PLAYER, value },
          { player: COMPUTER, value: computerNumber }
        ),
      };

    // Vérifier à chaques tour si le joueur a possibilité de rejouer
    //////////////////////////////////////
    case TEST_PLAYED:
      const lastNumbe =
        state.numbersPlayed[state.numbersPlayed.length - 1] !== undefined
          ? state.numbersPlayed[state.numbersPlayed.length - 1].value
          : 1;
      let played = false;

      state.numbers.every(function (num, index) {
        if (num % lastNumbe === 0 || lastNumbe % num === 0) {
          played = true;
          return false;
        } else {
          return true;
        }
      });

      if (!played) {
        return {
          ...state,
          message: IMPOSSIBLE, // Impossible de jouer
          started: false,
        };
      }
      return { ...state };

    default:
      return state;
  }
};

export default reducer;