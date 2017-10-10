import {combineReducers} from 'redux';
import applicants from '../features/applied/applicantReducer';
import fetching from './fetchingReducer';
import auth from '../features/auth/authReducer';
import errors from '../features/global/errorReducer';
import pageProfiles from './pageProfilesReducer';
import programs from './programsReducer';

const rootReducer = combineReducers({
  applicants,
  fetching,
  auth,
  errors,
  pageProfiles,
  programs,
});

export default rootReducer;
