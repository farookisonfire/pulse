import { RECEIVE_FELLOWS } from '../features/total/allAdmissionsActions';

export default function fellowsReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_FELLOWS:
      return action.fellows;
    default:
      return state;
  }
}
