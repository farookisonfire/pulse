import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Nav from './nav';

class NavDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleToggle = () => this.setState({ open: !this.state.open});
    this.handleClose = () => this.setState ({ open: false});
  }

  render() {
    return(
      <div>
        <span style={{position: 'relative', top: -5}}>
          <IconButton onTouchTap={this.handleToggle} >
            <MoreVertIcon color="white"/>
          </IconButton>
        </span>
        <img 
            style={{width: 40, marginRight: 12}}
            src="https://s3.amazonaws.com/minimal-spaces/heart-400.png"/>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <div onTouchTap={this.handleClose}>
            <Nav />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
