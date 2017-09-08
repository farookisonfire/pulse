import React, { Component } from 'react';
import Applied from '../applied';
import { connect } from 'react-redux';
import { fetchApplicants, updateApplicant } from '../applied/applicantActions';
import { formatApplicants } from '../../utils/utils';
import ApplicantTable from '../applied/ApplicantTable';
import RefreshBtn from '../applied/RefreshBtn';
import CheckBtn from '../applied/CheckBtn';
import DenyBtn from '../applied/DenyBtn';
import Spinner from 'react-spinkit';
import {spinner} from '../applied/applicantStyles';
import ConfirmDecision from '../applied/ConfirmDecision';
import ConfirmSnackbar from '../applied/ConfirmSnackbar';
import SearchBar from './SearchBar';
import SearchDropDown from './SearchDropDown';

const TableContainer = (props) => {
  const {
    fetchApplicants,
    updateApplicant,
    selectedRow,
    selectedName,
    decision,
    snackbarStatus,
    modalStatus,
    handleModalOpen,
    handleModalClose,
    handleModalConfirm,
    tableHeaders,
    tableHeadersMap,
    applicants,
    handleRowSelect,
    handleSnackbarClose,
    handleSearchBarChange,
    handleSearchDropDownChange,
    fetching,
    searchText = '',
    searchDropDownField,
  } = props;
  
  const filterApplicantsBySearchText = (applicants, searchText, field) => {
    return applicants.filter((applicant) => {
      return applicant[field].includes(searchText);
    });
  };
  
  const applicantsToUse = filterApplicantsBySearchText(applicants, searchText, searchDropDownField);
  
  return(
    <div>
      <div style={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: 16,
      }}>
        <SearchBar
          onSearchChange={handleSearchBarChange} />
        <SearchDropDown
          handleSearchDropDownChange={handleSearchDropDownChange}
          value={searchDropDownField}
          fields={tableHeadersMap} />
      </div>
      <div>
      <RefreshBtn onTouchTap={fetchApplicants}/>      
      {Number.isInteger(selectedRow) && (
        <span>
          <CheckBtn onTouchTap={() => handleModalOpen('secondary')} /> 
          <DenyBtn onTouchTap={() => handleModalOpen()}/>
        </span>)}
      </div>
  
      {fetching ? 
        <Spinner spinnerName="wave" noFadeIn style={spinner}/> : 
        <ApplicantTable 
            tableHeaders={tableHeaders} 
            tableHeadersMap={tableHeadersMap}
            applicants={applicantsToUse}
            handleRowSelect={handleRowSelect}/>}
      
      <ConfirmDecision 
        handleModalClose={handleModalClose} 
        handleModalConfirm={handleModalConfirm}
        modalStatus={modalStatus}
        decision={decision}
        selectedName={selectedName}/>
      <ConfirmSnackbar
        snackbarStatus={snackbarStatus}
        handleSnackbarClose={handleSnackbarClose}
        decision={decision}
        selectedName={selectedName} />
    </div>
  );
};

export default TableContainer;
