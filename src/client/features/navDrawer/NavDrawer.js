import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavDrawerMenuItems from './NavDrawerMenuItems';

class NavDrawer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      openState
    } = this.props;

    return(
      <Drawer
        width={200}
        docked={true}
        open={openState}
      >
        <NavDrawerMenuItems />
      </Drawer>
    );
  }
}

export default NavDrawer;
