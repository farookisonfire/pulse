import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Total from './components/total';
import Youth from './components/youth';
import Health from './components/health';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Total}/>
    <Route path="health" component={Health}/>
    <Route path="youth" component={Youth}/>
  </Route>
);
