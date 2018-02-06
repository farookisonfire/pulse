import {
  RECEIVE_APPLICANT,
  ENABLE_EDIT,
  DISABLE_EDIT,
  EDIT_APPLICANT,
  START_FETCH,
  END_FETCH,
  OPEN_SNACK_BAR,
  HANDLE_SNACKBAR_CLOSE,
  REMOVE_APPLICANT_FROM_STORE
} from '../features/searchUpdate/searchUpdateActions';

export default (state = {}, action) => {
  const editedApplicant = action.type === EDIT_APPLICANT ?
    Object.assign({}, state.applicant, { [action.field]: action.value }) :
    {};

  switch(action.type) {
    case RECEIVE_APPLICANT:
      return Object.assign({}, state, {applicant: action.applicant, originalApplicant: action.applicant});
    case REMOVE_APPLICANT_FROM_STORE:
      return Object.assign({}, state, {applicant: undefined, originalApplicant: undefined});
    case ENABLE_EDIT:
      return Object.assign({}, state, {editEnabled: true});
    case DISABLE_EDIT:
      return Object.assign({}, state, {editEnabled: false, applicant: action.originalApplicant});
    case EDIT_APPLICANT:
      return Object.assign({}, state, {applicant: editedApplicant});
    case START_FETCH:
      return Object.assign({}, state, {fetching: true});
    case END_FETCH:
      return Object.assign({}, state, {fetching: false});
    case OPEN_SNACK_BAR:
      return Object.assign({}, state, {
        receiveApplicantFail: true,
        snackbarMessage: action.msg
      });
    case HANDLE_SNACKBAR_CLOSE:
      return Object.assign({}, state, {receiveApplicantFail: false});
    default:
      return state;
  }
};
