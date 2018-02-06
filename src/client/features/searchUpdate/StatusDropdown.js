import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const applicantStatus = [
  { id:'applied', value: 'applied', name: 'Applied' },
  { id:'secondary', value: 'secondary', name: 'Secondary' },
  { id:'accepted', value: 'accepted', name: 'Accepted' },
  { id:'confirmed', value: 'confirmed', name: 'Confirmed' },
  { id:'withdrawn', value: 'withdrawn', name: 'Withdrawn' },
  { id:'deferred', value: 'deferred', name: 'Deferred' },
];

const StatusDropdown = (props) => {
  const {
    status,
    disabled,
    floatingLabelText,
    handleDropdownChange,
  } = props;

  const statusList = applicantStatus.map((status) => {
    return (
      <MenuItem
        value={status.value}
        key={`status-dropdown-${status.id}`}
        primaryText={status.name}
      />
    );
  });
  
  return (
    <SelectField
      value={status}
      disabled={disabled}
      onChange={handleDropdownChange}
      floatingLabelText={floatingLabelText}
    >
      {statusList}
    </SelectField>
  );
};

export default StatusDropdown;
