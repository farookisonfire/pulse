import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const ProgramDropdown = (props) => {
  const {
    programs,
    selectedProgramId,
    disabled,
    floatingLabelText,
    handleDropdownChange
  } = props;

  console.log('programDropdown props', props);

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
    <DropDownMenu
      name={'selectedProgramId'}
      value={selectedProgramId}
      disabled={disabled}
      onChange={handleDropdownChange}
    >
      {programList}
    </DropDownMenu>
  );
};

export default ProgramDropdown;
