import React, { Component } from 'react';
import Applied from '../applied';
import { connect } from 'react-redux';
import { fetchApplicants, updateApplicant } from '../applied/applicantActions';
import { formatApplicants, filterApplicantsBySearchText } from '../../utils/utils';
import ApplicantTable from '../applied/ApplicantTable';
import RefreshBtn from '../applied/RefreshBtn';
import CheckBtn from '../applied/CheckBtn';
import DenyBtn from '../applied/DenyBtn';
import InfoBtn from './InfoBtn';
import DeferWithdrawBtn from './DeferWithdrawBtn';
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
    infoActions,
    deferWithdrawActions,
    stage,
    selectable = true,
  } = props;

  const ActionButtonsToRender = () => {
    if (selectedRows && selectedRows.length) {
      if (stage === 'secondary') { // applied tab
        return (
          <span>
            <CheckBtn onTouchTap={() => handleModalOpen('accept')} />
            <DenyBtn onTouchTap={() => handleModalOpen()} />
          </span>
        );
      } else if (stage === 'final') { // secondary tab
        return (
          <span>
            <CheckBtn onTouchTap={() => handleModalOpen('accept')} />
            <DenyBtn onTouchTap={() => handleModalOpen()} />
            <InfoBtn onTouchTap={(() => handleModalOpen('info'))} />
          </span>
        );
      } else if (stage === 'accepted') { // accepted tab
        return (
          <span>
            <DenyBtn onTouchTap={() => handleModalOpen()} />
          </span>
        );
      } else if (stage === 'confirmed') { // confirmed tab
        return (
          <span>
            <DeferWithdrawBtn onTouchTap={() => handleModalOpen('defer-withdraw')} />
          </span>
        );
      }
    }
  };


  
  return(
    <div>
      <div>
        <RefreshBtn onTouchTap={fetchApplicants}/>
        {ActionButtonsToRender()}
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
        infoActions={infoActions}
        deferWithdrawActions={deferWithdrawActions}
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

{/*<div style={{
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
      </div>*/}
