import * as types from '../actions/actionTypes';

export default function totalsReducer(state =[], action) {
  switch(action.type) {
    case types.RECEIVE_ENROLLED:
      return action.enrolled;
    default:
      return state;
  }
}
