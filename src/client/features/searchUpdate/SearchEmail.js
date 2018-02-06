import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';

const SearchEmailContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const style = {
  marginLeft: 12,
};

const SearchEmail = (props) => {
  const {
    emailToSearch,
    handleSearchEmailChange,
    handleSearchEmailKeyPress
  } = props;

  return (
    <SearchEmailContainer>
      <TextField
        value={emailToSearch}
        hintText="Search by email..."
        onChange={handleSearchEmailChange}
        onKeyPress={handleSearchEmailKeyPress}
      />
      <FlatButton
        icon={<SearchIcon />}
        style={style}
      />
    </SearchEmailContainer>
  );
};

export default SearchEmail;
