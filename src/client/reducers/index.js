import {combineReducers} from 'redux';
import courses from './courseReducer';
import totalEnrolled from './totalsReducer';

const rootReducer = combineReducers({
  courses,
  totalEnrolled
});

export default rootReducer;
