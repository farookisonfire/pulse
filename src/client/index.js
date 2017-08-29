import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiTheme } from './theme';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import './index.css';

injectTapEventPlugin();

window.store = configureStore(initialState);

render (
  <Provider store={window.store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('app')
);
