import * as applicantActionTypes from '../features/applied/applicantActionTypes';

export default function fetchingReducer(state=false, action) {
  switch(action.type) {
    case applicantActionTypes.REQUEST_APPLICANTS:
      return true;
    case applicantActionTypes.RECEIVE_APPLICANTS:
      return false;
    default:
      return state;
  }
}