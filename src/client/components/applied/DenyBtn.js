import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';

const DenyBtn = ({onTouchTap}) => 
  <FlatButton
    icon={<Close />}
    style={{margin:12}}
    onTouchTap={onTouchTap}
  />;

export default DenyBtn;

