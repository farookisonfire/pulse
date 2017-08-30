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
      (this.setState({selectedRow:row, selectedId: this.props.applicants[row].id, selectedName: this.props.applicants[row].name})) :
      this.setState({selectedRow: undefined});
  }

  handleModalOpen(decision) { 
    this.setState({modalStatus: true, decision});
  }


  handleModalClose() {
    this.setState({modalStatus: false})
  }

  handleModalConfirm(program) {
      this.setState({modalStatus: false});
      const status = this.state.decision ?
        'secondary' :
        'denied';
      this.props.updateApplicant(this.state.selectedId, status, program);
      this.handleSnackbarOpen();
  }
    
  handleSnackbarOpen() {
    this.setState({snackbarStatus:true})
  }
  
  handleSnackbarClose() {
    this.setState({snackbarStatus: false})
  }

  render() {
    const {
      applicants,
      tableHeaders,
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
