import {combineReducers} from 'redux';
import applicants from '../features/applied/applicantReducer';
import fetching from './fetchingReducer';
import auth from '../features/auth/authReducer';

const rootReducer = combineReducers({
  applicants,
  fetching,
  auth
});

export default rootReducer;
