import React from 'react';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

const InfoBtn = ({onTouchTap}) =>
  <IconButton
    style={{top: 6, marginLeft: 12, marginRight: 12}}
    tooltip={'Send Info'}
    onTouchTap={onTouchTap}>
    <InfoIcon />
  </IconButton>;

export default InfoBtn;
