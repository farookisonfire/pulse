import {LOGGED_IN, LOGGED_OUT, LOGIN_STATUS} from './authActions';

export default function authReducer(state={logged_in: false}, action) {
  switch(action.type) {
    case LOGIN_STATUS:
      return Object.assign({}, state, {logged_in: action.status});
    default:
      return state;
  }
}