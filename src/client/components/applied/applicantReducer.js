import * as types from './applicantActionTypes';

export default function applicantReducer(state ={}, action) {
  switch(action.type) {
    case types.RECEIVE_APPLICANTS: 
      return action.applicants;
    default:
      return state;
  }
}