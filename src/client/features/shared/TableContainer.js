import React, { Component } from 'react';
import Applied from '../applied';
import { connect } from 'react-redux';
import { fetchApplicants, updateApplicant } from '../applied/applicantActions';
import { formatApplicants, filterApplicantsBySearchText } from '../../utils/utils';
import ApplicantTable from '../applied/ApplicantTable';
import RefreshBtn from '../applied/RefreshBtn';
import CheckBtn from '../applied/CheckBtn';
import DenyBtn from '../applied/DenyBtn';
import Spinner from 'react-spinkit';
import {spinner} from '../applied/applicantStyles';
import ConfirmDecisionModal from './ConfirmDecisionModal';
import ConfirmSnackbar from './ConfirmSnackbar';
import SearchBar from './SearchBar';
import SearchDropDown from './SearchDropDown';

const TableContainer = (props) => {
  const {
    fetchApplicants,
    updateApplicant,
    selectedRows,
    selectedApplicants,
    decision,
    snackbarStatus,
    modalStatus,
    handleModalOpen,
    handleModalClose,
    handleModalConfirm,
    tableHeaders,
    tableHeadersMap,
    applicants = [],
    handleRowSelect,
    handleSnackbarClose,
    handleSearchBarChange,
    handleSearchDropDownChange,
    fetching,
    searchText = '',
    searchDropDownField,
    acceptActions,
    denyActions,
    stage,
    selectable = true,
  } = props;
  
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
        {selectedRows && selectedRows.length ?
          (<span>
            <CheckBtn onTouchTap={() => handleModalOpen('accept')} />
            <DenyBtn onTouchTap={() => handleModalOpen()} />
          </span>) :
          null}
      </div>
  
      {fetching ? 
        <Spinner spinnerName="wave" noFadeIn style={spinner}/> : 
        <ApplicantTable 
            tableHeaders={tableHeaders} 
            tableHeadersMap={tableHeadersMap}
            applicants={applicants}
            handleRowSelect={handleRowSelect}
            selectable={selectable} />}
      
      <ConfirmDecisionModal 
        handleModalClose={handleModalClose}
        handleModalConfirm={handleModalConfirm}
        modalStatus={modalStatus}
        decision={decision}
        selectedApplicants={selectedApplicants}
        acceptActions={acceptActions}
        denyActions={denyActions}
        stage={stage} />
      <ConfirmSnackbar
        snackbarStatus={snackbarStatus}
        handleSnackbarClose={handleSnackbarClose}
        decision={decision}
        selectedApplicants={selectedApplicants}
        stage={stage} />
    </div>
  );
};

export default TableContainer;
