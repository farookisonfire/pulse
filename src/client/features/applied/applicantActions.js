import * as types from './applicantActionTypes';
import { addError } from '../global/errorActions';
import getBaseUrl from '../../baseUrl';

function requestApplicants() {
  return { type: types.REQUEST_APPLICANTS };
}

export function receiveApplicants(applicants) {
  return {type: types.RECEIVE_APPLICANTS, applicants};
}

function receiveApplicantsFail() {
  return {type: types.RECEIVE_APPLICANTS_FAIL};
}

export function fetchApplicants() {
  return function(dispatch) {
    dispatch(requestApplicants());
    return fetch(getBaseUrl() + '/api/applicants')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(applicants => dispatch(receiveApplicants(applicants)))
      .catch(err => {
        dispatch(receiveApplicantsFail());
        dispatch(addError(err));
      });
  };
}

export function updateApplicant(applicantDetails) {
  const { id = '' } = applicantDetails;

  return function(dispatch) {
    return fetch(getBaseUrl() + `/api/applicants`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicantDetails),
    })
      .then(res => {
        if (res.ok) {
          return dispatch(fetchApplicants());
        }
        throw new Error(res.statusText);
      })
      .catch(err => dispatch(addError(err)));
  };
}
