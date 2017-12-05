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
      fetchApplicants = () => {},
      updateApplicant = () => {},
      fetching = false,
    } = this.props;

    const {
      tableHeaders = [],
      tableHeadersMap = [],
      radioButtons = {},
      acceptActions = [],
      denyActions = [],
      infoActions = [],
      reminderActions = [],
      stage = 'final',
    } = secondaryPageData;

    const {
      selectedProgram
    } = this.state;

    const applicantsToUse = applicants.filter((applicant) => {
      if (selectedProgram === 'hbcu') {
        return applicant.hbcu === 'Yes';
      }
      return (applicant.secondaryProgram === selectedProgram && applicant.hbcu !== 'Yes');
    });

    return(
      <Shared.TablePage
        applicants={applicantsToUse}
        tableHeaders={tableHeaders}
        tableHeadersMap={tableHeadersMap}
        fetchApplicants={fetchApplicants}
        updateApplicant={updateApplicant}
        fetching={fetching}
        selectedProgramTab={selectedProgram}>
        <div style={{
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
          infoActions={infoActions}
          reminderActions={reminderActions}
          stage={stage} />
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
    secondaryPageData: secondary,
  };
};

export default connect(mapStateToProps, {fetchApplicants, updateApplicant})(SecondaryPage);
