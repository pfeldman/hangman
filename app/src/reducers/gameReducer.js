import initialState from './initialState';
import * as types from 'actions/actionTypes';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    case types.GAME_FETCH:
      return Object.assign({}, state, {
        letters: action.game.letters
      });
    default:
      return state;
  }
}