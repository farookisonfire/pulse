import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SearchDropDown = (props) => {
  const {
    handleSearchDropDownChange = () => {},
    value = '',
    fields = [],
  } = props;
  
  const fieldsToUse = fields.map((field) => {
    const label = field.toUpperCase();
    return (
      <MenuItem 
        key={`search-dropdown-${field}`}
        value={field} 
        primaryText={label} />
    );
  });

  return (
    <SelectField
      labelStyle={{fontSize: 12}}
      menuItemStyle={{fontSize: 12}}
      value={value}
      onChange={handleSearchDropDownChange}
      style={{width: 150, marginLeft: 16}} >
      {fieldsToUse}
    </SelectField>
  );
};

export default SearchDropDown;
