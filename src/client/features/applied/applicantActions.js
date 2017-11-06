import * as types from './applicantActionTypes';
import { addError } from '../global/errorActions';
import getBaseUrl from '../../baseUrl';

export const GENERIC_FETCH_START = 'GENERIC_FETCH_START';
export const GENERIC_FETCH_END = 'GENERIC_FETCH_END';

function genericFetchStart() {
  return { type: GENERIC_FETCH_START };
}

function genericFetchEnd() {
  return { type: GENERIC_FETCH_END }
}

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
  const {
    id = '',
    status = ''
  } = applicantDetails;

  const resourcePath = status === 'info-health' ?
    '/info/health' :
    'api/applicants';

  return function(dispatch) {
    dispatch(genericFetchStart());
    return fetch(getBaseUrl() + resourcePath, {
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
      .catch(err => {
        dispatch(addError(err));
        dispatch(genericFetchEnd());
      });
  };
}
