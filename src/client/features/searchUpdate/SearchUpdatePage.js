import React, { Component } from 'react';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import SearchEmail from './SearchEmail';
import { fetchApplicant } from './searchUpdateActions';

const SearchUpdatePageContainer = styled.div`
  background-color: white;
  min-height: calc(100vh - 64px);
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
    fetchApplicant(emailToSearch);
  }
  
  render() {
    console.log('SearchUpdatePage state', this.state);
    console.log('SearchUpdatePage props', this.props);
    const {
      emailToSearch
    } = this.state;

    return (
      <SearchUpdatePageContainer>
        <SectionTitle>Search & Update Applicants</SectionTitle>
        <Divider style={{marginLeft: 8, marginRight: 8}} />
        <SearchEmail
          emailToSearch={emailToSearch}
          handleSearchEmailChange={this.handleSearchEmailChange}
          handleSearchEmailKeyPress={this.handleSearchEmailKeyPress}
        />
      </SearchUpdatePageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchUpdatePage } = state;
  return {
    searchUpdatePage
  };
};

export default connect(mapStateToProps,{ fetchApplicant })(SearchUpdatePage);
