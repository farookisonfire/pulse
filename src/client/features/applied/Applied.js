import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from './applicantActions';

class Applied extends Component {
  render() {
    const {
      tableHeaders = [],
      fetchApplicants,
      updateApplicant,
    } = this.props;

    return(
      <Shared.TablePage
        applicants={this.props.applicants}
        tableHeaders={tableHeaders}
        fetchApplicants={fetchApplicants}
        updateApplicant={updateApplicant}
        >
        <Shared.TableContainer/>
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, pageProfiles, fetching}) => {  
  const {
    applied
  } = pageProfiles;

  const {
    tableHeaders,
  } = applied;

  return {
    fetching,
    tableHeaders,
    applicants: formatApplicants(applicants, 'applied')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(Applied);
