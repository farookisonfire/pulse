import React from 'react';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';

const RefreshBtn = ({onTouchTap}) => 
  <IconButton
    tooltip={'Refresh'}
    style={{top: 6, marginLeft: 24, marginRight: 12}}
    onTouchTap={onTouchTap}>
    <RefreshIcon />
  </IconButton>;

export default RefreshBtn;

