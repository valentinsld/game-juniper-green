import { SET_NUMBER, ADDITION} from '../constantes/actions'

export const set_number = payload => {
  return {
    type: SET_NUMBER, payload
  }
}

export const addition = () => {
  return {
    type: ADDITION
  }
}