import * as types from './actionTypes';
import {get} from 'helpers/serviceHelper';

function fetchGameSuccess(game) {
  return {
    type: types.GAME_FETCH,
    game
  };
}

export function fetchGame() {
  return dispatch => {
    get('game.json')
      .then(game => dispatch(fetchGameSuccess(game)));
  };
}