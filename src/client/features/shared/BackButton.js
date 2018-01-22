import React from 'react';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';

const InfoBtn = ({onTouchTap}) =>
  <IconButton
    style={{top: 6, marginLeft: 12, marginRight: 12}}
    tooltip={'Back'}
    onTouchTap={onTouchTap}>
    <BackIcon />
  </IconButton>;

export default InfoBtn;
