import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AuthService from '../../utils/AuthService';
import { connect } from 'react-redux';
import { loginStatus } from '../auth/authActions';
import { toggleNavDrawer } from './navActions';

const Title = () => (
  <div style={{display: 'flex', height: 64, alignItems: 'center'}}>
    <div>
      <img 
        style={{position: 'relative', top: 5, width: 30}}
        src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
    </div>
    <p style={{marginLeft: 8}}>Admissions</p>
  </div>
)

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
    const { toggleNavDrawer } = this.props;

    const authButton = this.state.loggedIn ? 
    <FlatButton onTouchTap={this.logout.bind(this)} label="LOGOUT"/> : 
    <FlatButton onClick={this.login.bind(this)} label="LOGIN" />;

    return (
      <AppBar
        title={<Title />}
        titleStyle={{fontWeight: 200}}
        iconElementRight={authButton}
        onLeftIconButtonTouchTap={toggleNavDrawer}
      />
    );
  }
}

export default connect(null, {loginStatus, toggleNavDrawer})(NavBar);

        // {/*iconElementLeft={<NavDrawer/>}*/}