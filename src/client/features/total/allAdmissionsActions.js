import getBaseUrl from '../../baseUrl';
import { receiveApplicants, genericFetchStart, genericFetchEnd } from '../applied/applicantActions';

export const RECEIVE_PROGRAMS = 'RECEIVE_PROGRAMS';
export const RECEIVE_FELLOWS = 'RECEIVE_FELLOWS';

const receivePrograms = (programs) => {
  return { type: RECEIVE_PROGRAMS, programs };
};

const receiveFellows = (fellows) => {
  return { type: RECEIVE_FELLOWS, fellows };
};

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(genericFetchStart());
    return fetch(`${getBaseUrl()}/api/initial-data`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unable to get initial data');
      })
      .then(json => {
        const { data = {} } = json;
        const {
          applicants = [],
          programs = [],
          fellows = [],
        } = data;
        dispatch(receiveApplicants(applicants));
        dispatch(receivePrograms(programs));
        dispatch(receiveFellows(fellows));
      })
      .catch((err) => {
        console.log('Unable to get initial data');
        dispatch(genericFetchEnd());
      });
  };
};
