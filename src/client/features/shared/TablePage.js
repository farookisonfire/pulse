import React from 'react';
import { filterApplicantsBySearchText } from '../../utils/utils';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedRow: undefined,		
      modalStatus: false,		
      decision: '',		
      snackbarStatus: false,		
      selectedId: '',		
      selectedName: '',		
      selectedEmail: '',
      searchText: '',
      searchDropDownField: 'name',
      filteredList: [],
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
    const { filteredList = [] } = this.state;
    const { applicants = [] } = this.props;
    const applicantListToUse = filteredList && filteredList.length ? filteredList : applicants;

    const row = rows[0];		
    Number.isInteger(row) ? 		
      (this.setState({		
        selectedRow:row, 		
        selectedId: applicantListToUse[row].id,
        selectedName: applicantListToUse[row].name,
        selectedEmail: applicantListToUse[row].email,
      })) :		
      this.setState({selectedRow: undefined});		
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

    const {		
      selectedId = '',		
      selectedEmail = '',		
      selectedName = '',		
      decision = '',		
    } = this.state;		

    // const status = stage ? stage : 'denied';
    // let finalDecision = '';
    // let program = '';

    const applicantName = selectedName.split(' ');		
    const firstName = applicantName[0];		
    const lastName = applicantName[applicantName.length - 1];		

    const applicantDetails = {		
      id: selectedId,		
      email: selectedEmail,		
      firstName,
      lastName,
    };

    if (stage === 'secondary' && (value === 'healthInnovation' || value === 'serve')) {
      applicantDetails.program = value;
      applicantDetails.status = stage;
    } else if (stage === 'final' && value === 'accepted') {
      applicantDetails.status = value;
      applicantDetails.program = acceptedTo;
    } else if (value === 'denied'){
      applicantDetails.status = value;
    }

    this.props.updateApplicant(applicantDetails);		
    this.handleSnackbarOpen();		
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
    } = this.state;

    const applicantsToUse = filteredList && filteredList.length ? filteredList : applicants;

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
        selectedRow: this.state.selectedRow,
        selectedName: this.state.selectedName,
        modalStatus: this.state.modalStatus,
        snackbarStatus: this.state.snackbarStatus,
        decision: this.state.decision,
        selectedId: this.state.selectedId,
        searchText: this.state.searchText,
        searchDropDownField: this.state.searchDropDownField,
        applicants: applicantsToUse,
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
