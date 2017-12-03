import React from 'react';
import Nav from './nav';
import NavDrawer from './navDrawer/NavDrawer';
import {connect} from 'react-redux';
import '../index.css';

class App extends React.Component {
  render() {
    const {
      logged_in,
      navDrawer
    } = this.props;

    return(
      <div className={navDrawer ? 'page-content drawer-open' : 'page-content drawer-close'}>
        <Nav />
        <NavDrawer openState={navDrawer} />
        {logged_in && this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({auth, navDrawer}) => {
  const { logged_in } = auth;
  return {
    logged_in,
    navDrawer
  };
};

export default connect(mapStateToProps)(App);
