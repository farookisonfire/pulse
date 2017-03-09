import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import * as totalsActions from './actions/totalsActions';

injectTapEventPlugin();

const store = configureStore();

store.dispatch(totalsActions.fetchEnrolled());

render (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('app')
);
