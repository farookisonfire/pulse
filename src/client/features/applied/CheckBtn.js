import React from 'react';
import IconButton from 'material-ui/IconButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';

const CheckBtn = ({onTouchTap}) => 
  <IconButton
    style={{top: 6, marginLeft: 12, marginRight: 12}}
    tooltip={'Accept'}
    onTouchTap={onTouchTap}>
    <CheckIcon/>
  </IconButton>;

export default CheckBtn;

