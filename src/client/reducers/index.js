import {combineReducers} from 'redux';
import applicants from '../features/applied/applicantReducer';
import fetching from './fetchingReducer';
import auth from '../features/auth/authReducer';
import errors from '../features/global/errorReducer';

const rootReducer = combineReducers({
  applicants,
  fetching,
  auth,
  errors
});

export default rootReducer;
