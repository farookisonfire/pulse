import { RECEIVE_PROGRAMS } from '../features/total/allAdmissionsActions';

export default function programsReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_PROGRAMS:
      return action.programs;
    default:
      return state;
  }
}
