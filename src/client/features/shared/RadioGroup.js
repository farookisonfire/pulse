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
        label={button.label} />
    );
  });

  return (
   <RadioButtonGroup 
    defaultSelected={defaultSelected}
    onChange={handleChange}>
     {RadioButtons}
   </RadioButtonGroup>
  );
};

export default RadioGroup;
