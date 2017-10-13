import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';


const Nav = () => (
  <Menu>
    <MenuItem
      containerElement={<Link to="/" />}
      primaryText="Applicants"
    />
    <MenuItem
      containerElement={<Link to="/fellowship" />}
      primaryText="Fellowship"
    />
  </Menu>
);

export default Nav;
