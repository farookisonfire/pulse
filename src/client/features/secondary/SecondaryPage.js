import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class SecondaryPage extends Component {
  render() {
    return(
      <Shared.TablePage
        applicants={this.props.applicants}
        tableHeaders={this.props.tableHeaders}>
        <Shared.TableContainer/>
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, fetching}) => {
  const tableHeaders = ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"];
  return {
    fetching,
    tableHeaders,
    applicants: formatApplicants(applicants, 'secondary')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(SecondaryPage);
