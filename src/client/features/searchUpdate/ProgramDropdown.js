import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ProgramDropdown = (props) => {
  const {
    programs,
    selectedProgramId,
    disabled,
    floatingLabelText,
    handleDropdownChange,
  } = props;

  const programList = programs.map((program) => {
    return (
      <MenuItem
        value={program.id}
        key={`program-dropdown-${program.id}`}
        primaryText={`${program.type} ${program.length} ${program.date}`}
        
      />
    );
  });

  return (
    <SelectField
      floatingLabelFixed
      hintText={'Hasn\'t enrolled yet'}
      value={selectedProgramId}
      disabled={disabled}
      onChange={handleDropdownChange}
      floatingLabelText={floatingLabelText}
      style={{ width: 435 }}
    >
      {programList}
    </SelectField>
  );
};

export default ProgramDropdown;
