import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from './nav-drawer';
import FlatButton from 'material-ui/FlatButton';
import AuthService from '../../utils/AuthService';
import {connect} from 'react-redux';
import {loginStatus} from '../auth/authActions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logginIn: false };
  }

  componentDidMount() {
    this.auth = new AuthService();
    this.setState({ loggedIn: this.auth.loggedIn() });
    this.props.loginStatus(this.auth.loggedIn());
    this.lock = this.auth.getLock();
    this.lock.on('authenticated', () => {
        this.setState({ loggedIn: this.auth.loggedIn() });
        this.props.loginStatus(this.auth.loggedIn());
    });
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
    this.setState({ loggedIn: this.auth.loggedIn() });
    this.props.loginStatus(this.auth.loggedIn());
  }

  
  render() {
    const authButton = this.state.loggedIn ? <FlatButton onTouchTap={this.logout.bind(this)} label="LOGOUT"/> : <FlatButton onClick={this.login.bind(this)} label="LOGIN" />;

    return (
      <AppBar
        title="Admissions Prototype | V.0.2"
        iconElementLeft = {<NavDrawer />}
        iconElementRight={authButton}
      />
    );
  }
}

export default connect(null, {loginStatus})(NavBar);
