import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from './nav-drawer';

const NavBar = () => (
  <AppBar
    title="2017 Enrolled"
    iconElementLeft = {<NavDrawer />}
  />
);

export default NavBar;
