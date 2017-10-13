import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './features/app';
import Total from './features/total';
import Fellowship from './features/fellowship/Fellowship';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Total}/>
    <Route path="fellowship" component={Fellowship}/>
  </Route>
);
