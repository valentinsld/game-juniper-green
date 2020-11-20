import {NEW_GAME, SET_NUMBER, TEST_PLAYED} from '../constantes/actions'

export const new_game = () => {
  return {
    type: NEW_GAME
  }
}

export const set_number = payload => {
  return {
    type: SET_NUMBER, payload
  }
}

export const test_played = () => {
  return {
    type: TEST_PLAYED
  }
}