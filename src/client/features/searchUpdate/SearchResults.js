import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ProgramDropdown  from './ProgramDropdown';

const SearchResultsContainer = styled.div`
  text-align: left;
  padding-left: 32px;
`;

const SearchResultsProgramsContainer = styled.div`
  padding-left: 8px;
`;

const SearchResultsButtonContainer = styled.div`
  padding-bottom: 24px;
`;

const SearchResults = (props) => {
  const {
    applicantDetails,
    handleEditClick,
    handleCancelClick,
    editEnabled,
    handleInputChange,
    handleEditSubmit,
    disableSubmit,
    programs,
    originalApplicant
  } = props;

  const {
    id,
    firstName,
    lastName,
    email,
    status,
    secondary,
    acceptedTo,
    selectedProgramId
  } = applicantDetails;

  const additionalTextField = (status) => {
    switch (status) {
      case 'secondary': return (
        <TextField
          floatingLabelText="Secondary"
          value={secondary}
          name="secondary"
          disabled={!editEnabled}
          onChange={handleInputChange}
          style={{marginLeft: 24}}
        />);
      case 'accepted': return (
        <TextField
          floatingLabelText="Accepted To"
          value={acceptedTo}
          name="acceptedTo"
          disabled={!editEnabled}
          onChange={handleInputChange}
          style={{marginLeft: 24}}
        />);
      case 'confirmed': return (
        <ProgramDropdown
          programs={programs}
          floatingLabelText="Selected Program Id"
          selectedProgramId={selectedProgramId}
          name="selectedProgramId"
          disabled={!editEnabled}
          handleDropdownChange={handleInputChange}
        />);
      default: return null;
    }
  }

  const buttonsToRender = !editEnabled ? (
    <div style={{display: 'flex'}}>
      <RaisedButton
        label="Edit"
        onClick={handleEditClick}
        style={{ marginLeft: 'auto', marginRight: 32 }} />
    </div>) : (
    <div style={{display: 'flex'}}>
      <RaisedButton
        label="Cancel"
        onClick={() => handleCancelClick(originalApplicant)}
        style={{ marginLeft: 'auto', marginRight: 32 }} />
      <RaisedButton
        label="Save"
        disabled={disableSubmit}
        onClick={handleEditSubmit}
        style={{ marginRight: 32 }} />
    </div>);

return (
  <div>
    <SearchResultsContainer>
      <TextField
        floatingLabelText="Applicant Id"
        value={id}
        name="id"
        disabled={true}
        onChange={handleInputChange}
      /><br />
      <TextField
        floatingLabelText="First Name"
        value={firstName}
        name="firstName"
        disabled={!editEnabled}
        onChange={handleInputChange}
      /><br />
      <TextField
        floatingLabelText="Last Name"
        value={lastName}
        name="lastName"
        disabled={!editEnabled}
        onChange={handleInputChange}
      /><br />
      <TextField
        floatingLabelText="Email"
        value={email}
        name="email"
        disabled={!editEnabled}
        onChange={handleInputChange}
      /><br />
      <TextField
        floatingLabelText="Status"
        value={status}
        name="status"
        disabled={!editEnabled}
        onChange={handleInputChange}
      /><br />
    </SearchResultsContainer>
    <SearchResultsProgramsContainer>
      {additionalTextField(status)}
    </SearchResultsProgramsContainer>
    <SearchResultsButtonContainer>
      {buttonsToRender}
    </SearchResultsButtonContainer>
  </div>
);
};

export default SearchResults;
