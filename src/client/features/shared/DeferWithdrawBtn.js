import React from 'react';
import IconButton from 'material-ui/IconButton';
import DeferWithdrawIcon from 'material-ui/svg-icons/action/trending-flat';

const DeferWithdrawBtn = ({onTouchTap}) => 
  <IconButton
    style={{top: 9}}
    tooltip={'Defer/Withdraw'}
    onTouchTap={onTouchTap}>
    <DeferWithdrawIcon />
  </IconButton>;

export default DeferWithdrawBtn;
