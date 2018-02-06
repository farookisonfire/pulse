import getBaseUrl from '../../baseUrl';

export const START_FETCH = 'START_FETCH';
export const END_FETCH = 'END_FETCH';
export const RECEIVE_APPLICANT = 'RECEIVE_APPLICANT';
export const ENABLE_EDIT = 'ENABLE_EDIT';
export const DISABLE_EDIT = 'DISABLE_EDIT';
export const EDIT_APPLICANT = 'EDIT_APPLICANT';
export const OPEN_SNACK_BAR = 'OPEN_SNACK_BAR';
export const HANDLE_SNACKBAR_CLOSE = 'HANDLE_SNACKBAR_CLOSE';

export const startFetch = () => ({type: START_FETCH});
export const endFetch = () => ({type: END_FETCH});
export const receiveApplicant = (applicant) => ({type: RECEIVE_APPLICANT, applicant});
export const openSnackBar = (msg) => ({ type: OPEN_SNACK_BAR, msg });
export const handleSnackbarClose = () => ({ type: HANDLE_SNACKBAR_CLOSE });
export const enableEdit = () => ({ type: ENABLE_EDIT});
export const disableEdit = (originalApplicant) => ({ type: DISABLE_EDIT , originalApplicant});
export const editApplicant = (e, data, dropdownValue, dropdownFieldName) => {
  if (!e.target.name && dropdownValue) {
    return {
      type: EDIT_APPLICANT, 
      field: dropdownFieldName,
      value: dropdownValue
    };
  }
  
  return {
    type: EDIT_APPLICANT, 
    field: e.target.name,
    value: data
  };
};

export const saveApplicantDetails = (applicant) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${getBaseUrl()}/api/applicant`, {
      method: 'PUT',
      body: JSON.stringify(applicant),
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('Unable to update applicant');
    });
  };
};

export const fetchApplicant = (email) => {
  const lowerCaseEmail = email.toLowerCase();
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${getBaseUrl()}/api/applicant/email/${lowerCaseEmail}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Unable to find applicant');
      })
      .then((applicant) => {
        dispatch(receiveApplicant(applicant));
        return dispatch(endFetch());
      })
      .catch((err) => {
        console.log('Error fetching applicant: ', err);
        dispatch(endFetch());
        dispatch(openSnackBar('Unable to find applicant with that email'));
      })
      ;
  };
};
