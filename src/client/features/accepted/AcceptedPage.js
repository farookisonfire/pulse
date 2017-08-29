import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class AcceptedPage extends Component {
  render() {
    return(
        <Shared.TableContainer
          applicants={this.props.applicants}
          tableHeaders={this.props.tableHeaders}
          selectable={false} />
    );
  }
}

const mapStateToProps = ({applicants, pageProfiles, fetching}) => {
  const {
    accepted
  } = pageProfiles;

  const {
    tableHeaders,
  } = accepted;
  
  return {
    fetching,
    tableHeaders,
    applicants: formatApplicants(applicants, 'secondary')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(AcceptedPage);
