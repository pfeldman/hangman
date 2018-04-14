import initialState from './initialState';
import * as types from 'actions/actionTypes';

export default function letter(state = initialState.guess, action) {
  switch (action.type) {
    case types.LETTER_GUESSED:
      return Object.assign({}, state, {
        letter: action.letter,
        positions: action.positions,
        error: false,
        timeStamp: new Date().getTime()
      });
    case types.LETTER_ERROR:
      return Object.assign({}, state, {
        error: action.errors,
        timeStamp: new Date().getTime()
      });
    default:
      return state;
  }
}