import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class SecondaryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 'health',
    };
  }
  
  render() {
    const {
      secondaryPages = [],
    } = this.props;

    const {
      activePage = 'health',
    } = this.state;

    const selectedPage = secondaryPages.filter(page => page.program.toLowerCase() === activePage)[0];
    const {
      tableHeaders = [],
      tableHeadersMap = [],
    } = selectedPage;

    return(
      <Shared.TablePage
        applicants={this.props.applicants}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}>
        <Shared.TableContainer/>
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, fetching, pageProfiles}) => {
  const {
    secondary
  } = pageProfiles;

  return {
    fetching,
    secondaryPages: secondary,
    applicants: formatApplicants(applicants, 'secondary')
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(SecondaryPage);
