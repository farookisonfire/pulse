import React from 'react';

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
    };

    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleRowSelect(rows) {		
    // TODO: refactor in order to do sorting. 		
    const row = rows[0];		
    Number.isInteger(row) ? 		
      (this.setState({		
        selectedRow:row, 		
        selectedId: this.props.applicants[row].id, 		
        selectedName: this.props.applicants[row].name,		
        selectedEmail: this.props.applicants[row].email,		
      })) :		
      this.setState({selectedRow: undefined});		
  }

  handleModalOpen(decision) { 
    this.setState({modalStatus: true, decision});
  }

  handleModalClose() {
    this.setState({modalStatus: false});
  }

  handleModalConfirm (programForSecondary) {		
    this.setState({modalStatus: false});		

    const {		
      selectedId = '',		
      selectedEmail = '',		
      selectedName = '',		
      decision = '',		
    } = this.state;		

    const status = decision ? 'secondary' : 'denied';		
    const program = programForSecondary ? programForSecondary : '';		
    const applicantName = selectedName.split(' ');		
    const firstName = applicantName[0];		
    const lastName = applicantName[applicantName.length - 1];		

    const applicantDetails = {		
      id: selectedId,		
      email: selectedEmail,		
      firstName: firstName,		
      lastName: lastName,		
      status: status,		
      program: program,		
    };		

    this.props.updateApplicant(applicantDetails);		
    this.handleSnackbarOpen();		
  }

    
  handleSnackbarOpen() {
    this.setState({snackbarStatus:true});
  }
  
  handleSnackbarClose() {
    this.setState({snackbarStatus: false});
  }

  render() {
    const {
      applicants,
      tableHeaders,
      tableHeadersMap,
      fetchApplicants,
      updateApplicant,
    } = this.props;

    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        handleRowSelect: this.handleRowSelect,
        handleModalOpen: this.handleModalOpen,
        handleModalClose: this.handleModalClose,
        handleModalConfirm: this.handleModalConfirm,
        handleSnackbarOpen: this.handleSnackbarOpen,
        handleSnackbarClose: this.handleSnackbarClose,
        selectedRow: this.state.selectedRow,
        selectedName: this.state.selectedName,
        modalStatus: this.state.modalStatus,
        snackbarStatus: this.state.snackbarStatus,
        decision: this.state.decision,
        selectedId: this.state.selectedId,
        applicants,
        tableHeaders,
        tableHeadersMap,
        fetchApplicants,
        updateApplicant,
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
