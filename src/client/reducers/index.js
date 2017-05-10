import {combineReducers} from 'redux';
import courses from './courseReducer';
import applicants from '../components/total/applicantReducer';

const rootReducer = combineReducers({
  courses,
  applicants
});

export default rootReducer;
