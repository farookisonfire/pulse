import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from './applicantActions';

class Applied extends Component {
  render() {
    const {
      tableHeaders = [],
      tableHeadersMap = [],
      fetchApplicants,
      updateApplicant,
      applicants = [],
      acceptActions = [],
      denyActions = [],
      stage = '',
    } = this.props;

    return(
      <Shared.TablePage
        applicants={applicants}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}
        fetchApplicants={fetchApplicants}
        updateApplicant={updateApplicant}>
        <Shared.TableContainer
          acceptActions={acceptActions}
          denyActions={denyActions}
          stage={stage} />
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, pageProfiles, fetching}) => {  
  const {
    applied,
  } = pageProfiles;

  const {
    tableHeaders,
    tableHeadersMap,
    acceptActions,
    denyActions,
    stage,
  } = applied;

  return {
    fetching,
    tableHeaders,
    tableHeadersMap,
    acceptActions,
    denyActions,
    stage,
    applicants: formatApplicants(applicants, 'applied')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(Applied);
