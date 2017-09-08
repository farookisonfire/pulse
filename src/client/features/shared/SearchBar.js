import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = (props) => {
  const {
    onSearchChange
  } = props;
  
  return (
    <TextField
      hintText="Search"
      hintStyle={{fontSize: 12}}
      inputStyle={{fontSize: 12}}
      onChange={onSearchChange} />
  );
};

export default SearchBar;
