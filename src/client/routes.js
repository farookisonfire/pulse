import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './features/app';
import Total from './features/total';
import Fellowship from './features/fellowship/Fellowship';
import Enrollment from './features/enrollment/Enrollment';
import SearchUpdatePage from './features/searchUpdate/SearchUpdatePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Total}/>
    <Route path="fellowship" component={Fellowship}/>
    <Route path="enrollment" component={Enrollment}/>
    <Route path="search-update" component={SearchUpdatePage}/>
  </Route>
);
