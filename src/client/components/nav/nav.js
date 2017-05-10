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
      containerElement={<Link to="health" />}
      primaryText="Health-Innovation"
    />
    <MenuItem
      containerElement={<Link to="youth"/>}
      primaryText="Youth Empowerment"
    />
  <MenuItem
    containerElement={<Link to="courses"/>}
    primaryText="Courses"
    />
  </Menu>
);

export default Nav;
