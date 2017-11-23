import React from 'react';
import IconButton from 'material-ui/IconButton';
import ReminderIcon from 'material-ui/svg-icons/image/timer';

const ReminderBtn = ({onTouchTap}) => 
  <IconButton
    style={{top: 6, marginLeft: 12, marginRight: 12}}
    tooltip={'Send Reminder'}
    onTouchTap={onTouchTap}>
    <ReminderIcon />
  </IconButton>;

export default ReminderBtn;
