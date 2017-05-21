import React from 'react';
import AcceptedTable from './AcceptedTable';
import {formatApplicants} from '../applied/applicantHelpers';
import {connect} from 'react-redux';

class Accepted extends React.Component{
  render() {
    return (
      <div>
        <AcceptedTable 
          acceptedApplicants={this.props.acceptedApplicants} 
          tableHeaders={this.props.tableHeaders}/>
      </div>
    );
  }
}

const mapStateToProps = ({applicants, fetching}) => {
  const tableHeaders = ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"];
  return {
    fetching,
    tableHeaders,
    acceptedApplicants: formatApplicants(applicants, 'accepted')
  };
};

export default connect(mapStateToProps)(Accepted);