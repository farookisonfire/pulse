import React from 'react';
import DeniedTable from './DeniedTable';
import {formatApplicants} from '../applied/applicantHelpers';
import {connect} from 'react-redux';

class Denied extends React.Component{
  render() {
    return (
      <div>
        <DeniedTable 
          deniedApplicants={this.props.deniedApplicants} 
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
    deniedApplicants: formatApplicants(applicants, 'denied')
  };
};

export default connect(mapStateToProps)(Denied);