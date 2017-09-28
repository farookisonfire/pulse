import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class AcceptedPage extends Component {
  render() {
    const {
      applicants = [],
      acceptedPageData = {},
      fetchApplicants = () => {},
      updateApplicant = () => {},
      fetching = false,
    } = this.props;

    const {
      tableHeaders,
      tableHeadersMap,
      selectable = false,
    } = acceptedPageData;

    return(
        <Shared.TablePage
          applicants={applicants}
          tableHeaders={tableHeaders}
          tableHeadersMap={tableHeadersMap}
          fetchApplicants={fetchApplicants}
          updateApplicant={updateApplicant}
          fetching={fetching}>
          <Shared.TableContainer
            selectable={selectable} />
        </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, pageProfiles, fetching}) => {
  const {
    accepted
  } = pageProfiles;
  
  return {
    fetching,
    acceptedPageData: accepted,
    applicants: formatApplicants(applicants, 'accepted')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(AcceptedPage);
