import {combineReducers} from 'redux';
import courses from './courseReducer';
import applicants from '../components/applied/applicantReducer';
import fetching from './fetchingReducer';

const rootReducer = combineReducers({
  courses,
  applicants,
  fetching
});

export default rootReducer;
