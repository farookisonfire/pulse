import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './features/app';
import Total from './features/total';
import Youth from './features/youth';
import Health from './features/health';
import CoursesPage from './features/courses/CoursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Total}/>
    <Route path="health" component={Health}/>
    <Route path="youth" component={Youth}/>
    <Route path="courses" component={CoursesPage}/>
  </Route>
);
