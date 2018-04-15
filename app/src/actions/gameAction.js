import * as types from './actionTypes';
import {get, post} from 'helpers/serviceHelper';
import {LOCAL_STORAGE_USER, LOCAL_STORAGE_TOKEN} from 'constants/Constants';

function fetchGameSuccess(game) {
  return {
    type: types.GAME_FETCH,
    game
  };
}

function loginSuccess() {
  return {
    type: types.GAME_LOGIN_SUCCESS,
  };
}

function loginRequest() {
  return {
    type: types.GAME_LOGIN_REQUEST
  };
}

export function sessionLogin() {
  return loginSuccess();
}

export function fetchGame() {
  return dispatch => {
    get('game.json')
      .then(game => dispatch(fetchGameSuccess(game)));
  };
}

export function login(email) {
  return dispatch => {
    dispatch(loginRequest());
    post('login.json', {email})
      .then(response => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, response.token);
        localStorage.setItem(LOCAL_STORAGE_USER, email);
        dispatch(loginSuccess());
      });
  };
}

export function logout() {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_USER);

  return {
    type: types.GAME_LOGOUT
  };
}
