import * as types from "./actionTypes";

function requestEnrolled() {
  return { type: types.REQUEST_ENROLLED };
}

function receiveEnrolled(enrolled) {
  return { type: types.RECEIVE_ENROLLED, enrolled };
}

export function fetchEnrolled() {
  return function(dispatch) {
    dispatch(requestEnrolled());
    return fetch('/api/totals')
      .then(response => response.json())
      .then(enrolled => {
        dispatch(receiveEnrolled(enrolled));
      });
  };
}
