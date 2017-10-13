import * as applicantActionTypes from '../features/applied/applicantActionTypes';
import { GENERIC_FETCH_START, GENERIC_FETCH_END } from '../features/applied/applicantActions';

export default function fetchingReducer(state=false, action) {
  switch(action.type) {
    case applicantActionTypes.REQUEST_APPLICANTS:
      return true;
    case GENERIC_FETCH_START:
      return true;
    case GENERIC_FETCH_END:
      return false;
    case applicantActionTypes.RECEIVE_APPLICANTS:
      return false;
    case applicantActionTypes.RECEIVE_APPLICANTS_FAIL:
      return false; 
    default:
      return state;
  }
}