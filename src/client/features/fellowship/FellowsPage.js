import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatConfirmedApplicants, resolveProgramTypeAndDate } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class FellowsPage extends Component {
  render() {
    const {
      fellowshipPageData = {},
      fellows = [],
    } = this.props;

    const {
      tableHeaders = [],
      tableHeadersMap = [],
    } = fellowshipPageData;

    return(
      <Shared.TablePage
        applicants={fellows}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}>
        <Shared.TableContainer
          selectable={false}/>
      </Shared.TablePage>
    );
  }
}

export default FellowsPage;
