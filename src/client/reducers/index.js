import {combineReducers} from 'redux';
import courses from './courseReducer';
import applicants from '../components/applied/applicantReducer';
import fetching from './fetchingReducer';
import auth from '../components/auth/authReducer';

const rootReducer = combineReducers({
  courses,
  applicants,
  fetching,
  auth
});

export default rootReducer;
