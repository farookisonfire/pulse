import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

const RefreshBtn = ({onTouchTap}) => 
  <FlatButton
    icon={<Refresh />}
    style={{margin:12}}
    onTouchTap={onTouchTap}
  />;

export default RefreshBtn;

