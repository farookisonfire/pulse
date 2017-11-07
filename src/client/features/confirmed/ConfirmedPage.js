import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatConfirmedApplicants, resolveProgramTypeAndDate } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class ConfirmedPage extends Component {
  render() {
    const {
      confirmedPageData = {},
      applicants = [],
      fetchApplicants = () => {},
      updateApplicant = () => {},
      fetching = false,
    } = this.props;

    const {
      tableHeaders = [],
      tableHeadersMap = [],
      stage = 'confirmed',
    } = confirmedPageData;

    return(
      <Shared.TablePage
        applicants={applicants}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}
        fetchApplicants={fetchApplicants}
        updateApplicant={updateApplicant}
        fetching={fetching}>
        <Shared.TableContainer
          stage={stage} />
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    fetching,
    pageProfiles,
    programs,
  } = state;

  const {
    confirmed
  } = pageProfiles;

  return {
    fetching,
    confirmedPageData: confirmed,
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(ConfirmedPage);
