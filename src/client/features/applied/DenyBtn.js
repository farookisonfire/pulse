import React from 'react';
import IconButton from 'material-ui/IconButton';
import DenyIcon from 'material-ui/svg-icons/navigation/close';

const DenyBtn = ({onTouchTap}) => 
  <IconButton
    style={{top: 6, marginLeft: 12, marginRight: 12}}
    tooltip={'Deny / Remove'}
    onTouchTap={onTouchTap}>
    <DenyIcon />
  </IconButton>

export default DenyBtn;

