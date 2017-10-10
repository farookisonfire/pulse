import getBaseUrl from '../../baseUrl';
import { receiveApplicants } from '../applied/applicantActions';

export const RECEIVE_PROGRAMS = 'RECEIVE_PROGRAMS';

const receivePrograms = (programs) => {
  return { type: RECEIVE_PROGRAMS, programs };
};

export const getInitialData = () => {
  return (dispatch) => {
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
        } = data;
        dispatch(receiveApplicants(applicants));
        dispatch(receivePrograms(programs));
      })
      .catch((err) => {
        console.log('Unable to get initial data');
      });
  };
};
