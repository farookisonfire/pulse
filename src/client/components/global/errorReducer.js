import * as types from './errorActionTypes';

export default function errorReducer(state=[], action) {
  switch(action.type) {
    case types.ADD_ERROR:
      return state.concat([action.err]);
    default:
      return state;
  }
}