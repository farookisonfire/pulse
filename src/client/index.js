import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import './index.css';

injectTapEventPlugin();

window.store = configureStore();

render (
  <Provider store={window.store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('app')
);
