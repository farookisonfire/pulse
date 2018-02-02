import getBaseUrl from '../../baseUrl';

const REQUEST_APPLICANT = 'REQUEST_APPLICANT';
export const RECEIVE_APPLICANT = 'RECEIVE_APPLICANT';

const requestApplicant = () => ({type: REQUEST_APPLICANT});
const receiveApplicant = (applicant) => ({type: RECEIVE_APPLICANT, applicant});

export const fetchApplicant = (email) => {
  return (dispatch) => {
    dispatch(requestApplicant());
    return fetch(`${getBaseUrl()}/api/applicant/email/${email}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Unable to find applicant');
      })
      .then((applicant) => dispatch(receiveApplicant(applicant)))
      .catch((err) => {
        console.log('Error - unable to find applicant', err);
      });
  };
};
