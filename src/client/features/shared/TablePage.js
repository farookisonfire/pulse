import React from 'react';
import { filterApplicantsBySearchText } from '../../utils/utils';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalStatus: false,		
      decision: '',		
      snackbarStatus: false,		
      searchText: '',
      searchDropDownField: 'name',
      filteredList: [],
      selectedRows: [],
      selectedApplicants: [],
    };

    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSearchDropDownChange = this.handleSearchDropDownChange.bind(this);
  }

  handleRowSelect(rows) {		
    const { applicants = [] } = this.props;

    const selectedRows = [];
    const selectedApplicants = [];

    if (rows && rows.length) {
      rows.forEach((row) => {
        const applicant = {};
        applicant.id = applicants[row].id;
        applicant.name = applicants[row].name;
        applicant.email = applicants[row].email;
        applicant.phone = applicants[row].phone;
        applicant.hbcu = applicants[row].hbcu;
        applicant.secondaryProgram = applicants[row].secondaryProgram;
        
        selectedRows.push(row);
        selectedApplicants.push(applicant);
      });
    }

    this.setState({
      selectedRows,
      selectedApplicants,
    });
  }

  handleModalOpen(decision) { 
    this.setState({modalStatus: true, decision});
  }

  handleModalClose() {
    this.setState({modalStatus: false});
  }
    
  handleSnackbarOpen() {
    this.setState({snackbarStatus:true});
  }
  
  handleSnackbarClose() {
    this.setState({snackbarStatus: false});
  }

  handleSearchBarChange(e, value) {
    const { applicants = [] } = this.props;
    const { searchDropDownField } = this.state;

    const filteredList = filterApplicantsBySearchText(applicants, value, searchDropDownField);
    this.setState({searchText: value, filteredList});
  }

  handleSearchDropDownChange(e, idx, value) {
    this.setState({searchDropDownField: value});
  }

  handleModalConfirm (stage, value, acceptedTo) {
    this.setState({modalStatus: false});		
    const { selectedProgramTab } = this.props;
    const {		
      selectedApplicants = [],
      decision = '',		
    } = this.state;			

    const selectedApplicantDetails = {
      selectedApplicants,
    };

    if (stage === 'secondary' && (value === 'healthInnovation' || value === 'education' || value === 'youthEmpowerment')) {
      selectedApplicantDetails.program = value;
      selectedApplicantDetails.status = stage;
    } else if (stage === 'final' && (value === 'accepted' || value === 'info-health' || value === 'info-youth')) {
      selectedApplicantDetails.status = value;
      selectedApplicantDetails.program = acceptedTo;
    } else if (stage === 'final' && value === 'reminder-secondary') {
      selectedApplicantDetails.status = value;
      selectedApplicantDetails.program = selectedProgramTab;
    } else if (value === 'denied' || 'removed'){
      selectedApplicantDetails.status = value;
    } else if (stage === 'confirmed' && (value === 'withdraw' || value === 'defer')) {
      selectedApplicantDetails.status = value;
    }

    this.props.updateApplicant(selectedApplicantDetails);		
    this.handleSnackbarOpen();		
  }

  componentWillReceiveProps() {
    this.setState({filteredList: this.props.applicants});
  }

  render() {
    const {
      applicants,
      tableHeaders,
      tableHeadersMap,
      fetchApplicants,
      updateApplicant,
      fetching,
    } = this.props;

    const {
      filteredList = [],
      selectedApplicants,
    } = this.state;

    const applicantsToUse = filteredList && filteredList.length ? filteredList : [];

    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        handleRowSelect: this.handleRowSelect,
        handleModalOpen: this.handleModalOpen,
        handleModalClose: this.handleModalClose,
        handleModalConfirm: this.handleModalConfirm,
        handleSnackbarOpen: this.handleSnackbarOpen,
        handleSnackbarClose: this.handleSnackbarClose,
        handleSearchBarChange: this.handleSearchBarChange,
        handleSearchDropDownChange: this.handleSearchDropDownChange,
        selectedRows: this.state.selectedRows,
        selectedApplicants,
        modalStatus: this.state.modalStatus,
        snackbarStatus: this.state.snackbarStatus,
        decision: this.state.decision,
        searchText: this.state.searchText,
        searchDropDownField: this.state.searchDropDownField,
        applicants: applicants,
        tableHeaders,
        tableHeadersMap,
        fetchApplicants,
        updateApplicant,
        fetching,
      });
    });

    return(
      <div>
        { childrenWithProps }
      </div>
    );
  }
}

export default TablePage;
