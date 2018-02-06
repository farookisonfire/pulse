import React, { Component } from 'react';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import SearchEmail from './SearchEmail';
import SearchResults from './SearchResults';
import {
  startFetch,
  endFetch,
  fetchApplicant,
  enableEdit,
  disableEdit,
  editApplicant,
  saveApplicantDetails,
  openSnackBar,
  handleSnackbarClose
} from './searchUpdateActions';
import { spinner } from '../applied/applicantStyles';

const SearchUpdatePageContainer = styled.div`
  background-color: #f8f7f7;
  height: 100%;
  min-height: calc(100vh - 64px);
`;

const SearchUpdatePageCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 95%;
  margin: 48px auto;
`;

const SectionTitle = styled.h2`
  margin: 0;
  margin-left: 16px;
  color: rgba(50,50,50,.75);
  padding: 32px 8px 24px 8px;
  font-weight: 200;
  font-size: 22px;
`;

class SearchUpdatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailToSearch: '',
    };

    this.handleSearchEmailChange = this.handleSearchEmailChange.bind(this);
    this.handleSearchEmailKeyPress = this.handleSearchEmailKeyPress.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleSearchEmailChange(e, email) {
    this.setState({ emailToSearch: email });
  }

  handleSearchEmailKeyPress(e) {
    if (e.key === 'Enter') this.handleInputSubmit();
  }

  handleInputSubmit() {
    const { emailToSearch } = this.state;
    const { fetchApplicant } = this.props;
    fetchApplicant(emailToSearch)
      // need to show toast fetching aplicant was unsuccessful
  }

  handleEditSubmit() {
    const {
      saveApplicantDetails,
      fetchApplicant,
      endFetch,
      openSnackBar,
      searchUpdatePage: {
        applicant,
      }
    } = this.props;

    saveApplicantDetails(applicant)
      .then(fetchApplicant(applicant.email))
      .then(endFetch)
      .then(() => openSnackBar('Applicant update successful'))
      .catch((err) => {
        console.log('Error updating applicant: ', err);
        openSnackBar('There was an error updating the applicant');
      });
  }
        // remember to update the prod db so all emails are lowercased;

  handleSnackbarClose() {
    this.props.handleSnackbarClose();
  }


  render() {
    console.log('SearchUpdatePage state', this.state);
    console.log('SearchUpdatePage props', this.props);
    const {
      enableEdit,
      disableEdit,
      editApplicant,
      programs,
      searchUpdatePage: {
        fetching = false,
        originalApplicant = {},
        applicant,
        editEnabled = false,
        receiveApplicantFail = false,
        snackbarMessage
      }
    } = this.props;

    const {
      emailToSearch
    } = this.state;

    return (
      <SearchUpdatePageContainer>
        {fetching ? <Spinner spinnerName="wave" noFadeIn style={spinner} /> : (
          <div>
            <SectionTitle>Search & Update Applicants</SectionTitle>
            <Divider style={{marginLeft: 8, marginRight: 8}} />
            <SearchUpdatePageCard>
              <SearchEmail
                emailToSearch={emailToSearch}
                handleSearchEmailChange={this.handleSearchEmailChange}
                handleSearchEmailKeyPress={this.handleSearchEmailKeyPress}
              />
              {applicant && <SearchResults
                originalApplicant={originalApplicant}
                programs={programs}
                editEnabled={editEnabled}
                handleEditClick={enableEdit}
                handleCancelClick={disableEdit}
                applicantDetails={applicant}
                handleInputChange={editApplicant}
                handleEditSubmit={this.handleEditSubmit}
                disableSubmit={JSON.stringify(applicant) === JSON.stringify(originalApplicant)} />}
            </SearchUpdatePageCard>
            <Snackbar
              open={receiveApplicantFail}
              message={snackbarMessage}
              autoHideDuration={4000}
              onRequestClose={this.handleSnackbarClose}
            />
          </div>
        )}
      </SearchUpdatePageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    searchUpdatePage,
    programs
  } = state;
  
  return {
    searchUpdatePage,
    programs
  };
};

export default connect(mapStateToProps,{
  startFetch,
  endFetch,
  fetchApplicant,
  enableEdit,
  disableEdit,
  editApplicant,
  saveApplicantDetails,
  openSnackBar,
  handleSnackbarClose
})(SearchUpdatePage);
