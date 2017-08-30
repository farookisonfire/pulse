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
    fetching,
  } = props;

  return(
    <div>
      <RefreshBtn onTouchTap={fetchApplicants}/>      
      {Number.isInteger(selectedRow) && (
        <span>
          <CheckBtn onTouchTap={() => handleModalOpen('secondary')} /> 
          <DenyBtn onTouchTap={() => handleModalOpen()}/>
        </span>)}
  
      {fetching ? 
        <Spinner spinnerName="wave" noFadeIn style={spinner}/> : 
        <ApplicantTable 
            tableHeaders={tableHeaders} 
            tableHeadersMap={tableHeadersMap}
            applicants={applicants}
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
