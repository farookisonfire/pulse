import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shared from '../shared';
import { formatSecondaryApplicants } from '../../utils/utils';
import {fetchApplicants, updateApplicant} from '../applied/applicantActions';

class SecondaryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProgram: 'healthInnovation',
    };

    this.onRadioButtonSelect = this.onRadioButtonSelect.bind(this);
  }

  onRadioButtonSelect(e, value) {
    this.setState({selectedProgram: value});
  }
  
  render() {
    const {
      secondaryPageData = {},
      applicants = [],
      acceptActions = [],
      denyActions = [],
      stage = 'final',
      fetchApplicants = () => {},
      updateApplicant = () => {},
    } = this.props;

    const {
      tableHeaders = [],
      tableHeadersMap = [],
      radioButtons = {},
    } = secondaryPageData;

    const {
      selectedProgram
    } = this.state;

    const applicantsToUse = applicants.filter((program) => {
      return program.secondaryProgram === selectedProgram;
    });

    return(
      <Shared.TablePage
        applicants={applicantsToUse}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}
        fetchApplicants={fetchApplicants}
        updateApplicant={updateApplicant} >
        <div style={{
          display: 'flex',
          marginTop: 16,
          marginLeft: 16,
        }}>
          <Shared.RadioGroup
          radioGroupData={radioButtons}
          handleChange={this.onRadioButtonSelect} />
        </div>
        <Shared.TableContainer
          acceptActions={acceptActions}
          denyActions={denyActions}
          stage={stage} />
      </Shared.TablePage>
    );
  }
}

const mapStateToProps = ({applicants, fetching, pageProfiles}) => {
  const {
    secondary
  } = pageProfiles;

  const {
    acceptActions,
    denyActions,
    stage,
  } = secondary;

  return {
    fetching,
    secondaryPageData: secondary,
    applicants: formatSecondaryApplicants(applicants, 'secondary'),
    acceptActions,
    denyActions,
    stage,
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(SecondaryPage);
