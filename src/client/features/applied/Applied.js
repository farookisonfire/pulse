import React from 'react';
import { Link } from 'react-router';
import ApplicantTable from './ApplicantTable';
import {connect} from 'react-redux';
import {fetchApplicants, updateApplicant} from './applicantActions';
import {formatApplicants} from './applicantHelpers';
import RefreshBtn from './RefreshBtn';
import CheckBtn from './CheckBtn';
import DenyBtn from './DenyBtn';
import Spinner from 'react-spinkit';
import {spinner} from './applicantStyles';

class Applied extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedRow: undefined
    };

    this.props.fetchApplicants();

    this.handleRowSelect = (rows) => {
      const row = rows[0];
      Number.isInteger(row) ? 
        (this.setState({selectedRow:row, selectedId: this.props.applicants[row].id})) :
        this.setState({selectedRow: undefined});
    };
  }
  
  render() {

    return(
      <div>
        <RefreshBtn onTouchTap={this.props.fetchApplicants}/>      
        {Number.isInteger(this.state.selectedRow) && (
          <span>
            <CheckBtn onTouchTap={() => this.props.updateApplicant(this.state.selectedId, 'accepted')} /> 
            <DenyBtn onTouchTap={() => this.props.updateApplicant(this.state.selectedId, 'denied')}/>
          </span>)}
        {this.props.fetching ? 
          <Spinner spinnerName="wave" noFadeIn style={spinner}/> : 
          <ApplicantTable 
              tableHeaders={this.props.tableHeaders} 
              applicants={this.props.applicants}
              handleRowSelect={this.handleRowSelect}/>}
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
