import { RECEIVE_APPLICANT } from '../features/searchUpdate/searchUpdateActions';

export default (state = {}, action) => {
  console.log('reducer called', action);
  switch(action.type) {
    case RECEIVE_APPLICANT:
      return Object.assign({}, state, {applicant: action.applicant});
    default:
      return state;
  }
};
