import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const RadioGroup = (props) => {
  const {
    radioGroupData = {},
    handleChange = () => {},
  } = props;
  
  const {
    buttons = [],
    defaultSelected = '',
  } = radioGroupData;

  const RadioButtons = buttons.map((button) => {
    return (
      <RadioButton
        value={button.value}
        label={button.label}
        labelStyle={{fontSize: 12}}
        iconStyle={{width: 20, marginRight: 8}}
        style={{width: 200}} />
    );
  });

  return (
   <RadioButtonGroup
    style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'center'}}
    defaultSelected={defaultSelected}
    onChange={handleChange} >
     {RadioButtons}
   </RadioButtonGroup>
  );
};

export default RadioGroup;
