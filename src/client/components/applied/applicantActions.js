import * as types from './applicantActionTypes';
import { addError } from '../global/errorActions';
import getBaseUrl from '../../baseUrl';

function requestApplicants() {
  return { type: types.REQUEST_APPLICANTS };
}

function receiveApplicants(applicants) {
  return {type: types.RECEIVE_APPLICANTS, applicants};
}

function receiveApplicantsFail(err) {
  return {type: types.RECEIVE_APPLICANTS_FAIL};
}

export function fetchApplicants() {
  console.log('the node env',process.env.NODE_ENV)
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

export function updateApplicant(applicantId, status) {
  return function(dispatch) {
    return fetch(getBaseUrl() + `/api/applicants/${applicantId}/${status}`, {method: 'PUT'})
      .then(res => {
        if (res.ok) {
          return dispatch(fetchApplicants());
        }
        throw new Error(res.statusText);
      })
      .catch(err => console.log('in the action',err));
  };
}
