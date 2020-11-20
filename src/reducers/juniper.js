import { SET_NUMBER, ADDITION } from "../constantes/actions";

// Source de vérité
const stateInit = {
  number1: "",
  number2: "",
  result: 0,
  message: "Bienvenue sur ma calculatrice",
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case SET_NUMBER:
      const {value, name} = action.payload
      return {
        ...state,
        [name]: Number(value),
      };

    case ADDITION:
      return {
        ...state,
        result: state.number1 + state.number2,
      };

    default:
      return state;
  }
};

export default reducer;
