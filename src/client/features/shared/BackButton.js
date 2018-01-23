import React from 'react';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';

const BackButton = ({onTouchTap}) =>
  <IconButton
    style={{position:'absolute', top: 150, marginLeft: 12, marginRight: 12}}
    tooltip={'Back'}
    onTouchTap={onTouchTap}>
    <BackIcon />
  </IconButton>;

export default BackButton;
