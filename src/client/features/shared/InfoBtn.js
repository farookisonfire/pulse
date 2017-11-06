import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Info from 'material-ui/svg-icons/action/info-outline';

const CheckBtn = ({onTouchTap}) => 
  <FlatButton
    icon={<Info />}
    style={{margin:12}}
    onTouchTap={onTouchTap}
  />;

export default CheckBtn;

