import * as types from './applicantActionTypes';

function requestApplicants() {
  return { type: types.REQUEST_APPLICANTS };
}

function receiveApplicants(applicants) {
  return {type: types.RECEIVE_APPLICANTS, applicants};
}

function receiveApplicantsFail(err) {
  return {type: types.RECEIVE_APPLICANTS_FAIL, err}
}

export function fetchApplicants() {
  return function(dispatch) {
    dispatch(requestApplicants());
    return fetch('/api/applicants')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.statusText);
      })
      .then(applicants => dispatch(receiveApplicants(applicants)))
      .catch(err => receiveApplicantsFail(err));
  };
}