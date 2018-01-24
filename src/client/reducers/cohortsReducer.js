import { RECEIVE_COHORTS } from '../features/total/allAdmissionsActions';

export default function cohortsReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_COHORTS:
      return action.cohorts;
    default:
      return state;
  }
}
