import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Check from 'material-ui/svg-icons/navigation/check';

const CheckBtn = ({onTouchTap}) => 
  <FlatButton
    icon={<Check />}
    style={{margin:12}}
    onTouchTap={onTouchTap}
  />;

export default CheckBtn;

