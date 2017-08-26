import React from 'react';
import { Link } from 'react-router';
import ApplicantTable from './ApplicantTable';
import {connect} from 'react-redux';
import {fetchApplicants, updateApplicant} from './applicantActions';
import { formatApplicants } from '../../utils/utils';
import RefreshBtn from './RefreshBtn';
import CheckBtn from './CheckBtn';
import DenyBtn from './DenyBtn';
import Spinner from 'react-spinkit';
import {spinner} from './applicantStyles';
import ConfirmDecision from './ConfirmDecision';
import ConfirmSnackbar from './ConfirmSnackbar';

class Applied extends React.Component {
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

    this.props.fetchApplicants();

    this.handleRowSelect = (rows) => {
      // TODO: refactor in order to do sorting. 
      const row = rows[0];
      Number.isInteger(row) ? 
        (this.setState({selectedRow:row, selectedId: this.props.applicants[row].id, selectedName: this.props.applicants[row].name})) :
        this.setState({selectedRow: undefined});
    };

    this.handleModalOpen = (decision) => this.setState({modalStatus: true, decision});
    this.handleModalClose = () => this.setState({modalStatus: false});
    this.handleModalConfirm = (program) => {
      this.setState({modalStatus: false});
      const status = this.state.decision ?
        'secondary' :
        'denied';
      this.props.updateApplicant(this.state.selectedId, status, program);
      this.handleSnackbarOpen();
    };
    this.handleSnackbarOpen = () => this.setState({snackbarStatus:true});
    this.handleSnackbarClose = () => this.setState({snackbarStatus: false});
  }
  
  render() {
    return(
      <div>
        <RefreshBtn onTouchTap={this.props.fetchApplicants}/>      
        {Number.isInteger(this.state.selectedRow) && (
          <span>
            <CheckBtn onTouchTap={() => this.handleModalOpen('secondary')} /> 
            <DenyBtn onTouchTap={() => this.handleModalOpen()}/>
          </span>)}
        
        {this.props.fetching ? 
          <Spinner spinnerName="wave" noFadeIn style={spinner}/> : 
          <ApplicantTable 
              tableHeaders={this.props.tableHeaders} 
              applicants={this.props.applicants}
              handleRowSelect={this.handleRowSelect}/>}
        
        <ConfirmDecision 
          handleModalClose={this.handleModalClose} 
          handleModalConfirm={this.handleModalConfirm}
          modalStatus={this.state.modalStatus}
          decision={this.state.decision}
          selectedName={this.state.selectedName}/>
        <ConfirmSnackbar
          snackbarStatus={this.state.snackbarStatus}
          handleSnackbarClose={this.handleSnackbarClose}
          decision={this.state.decision}
          selectedName={this.state.selectedName} />
      </div>
    );
  }
}

const mapStateToProps = ({applicants, fetching}) => {
  const tableHeaders = ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"];
  return {
    fetching,
    tableHeaders,
    applicants: formatApplicants(applicants, 'applied')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(Applied);
