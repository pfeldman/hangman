import initialState from './initialState';
import * as types from 'actions/actionTypes';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    case types.GAME_FETCH:
      return Object.assign({}, state, {
        letters: action.game.letters
      });
    case types.GAME_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        loggingIn: false
      });
    case types.GAME_LOGIN_REQUEST:
      return Object.assign({}, state, {
        loggingIn: true
      });
    case types.GAME_LOGOUT:
      return Object.assign({}, state, {
        loggedIn: false
      });
    default:
      return state;
  }
}