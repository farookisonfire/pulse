import React, { Component } from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import EnrollmentContent from './EnrollmentContent';

const EnrollmentPage = styled.div`
  background-color: white;
  min-height: calc(100vh - 64px);
`;

const SectionTitle = styled.h2`
  margin: 0;
  margin-left: 16px;
  color: rgba(50,50,50,.75);
  padding: 32px 8px 24px 8px;
  font-weight: 200;
  font-size: 22px;
`;

class Enrollment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProgramEnrollment: {},
      selectedCohort: '',
      selectedProgramType: '',
      selectedProgramId: '',
      confirmedApplicants: [],
      waitlistedApplicants: [],
      currentEnrollmentPage: 0,
      enrollmentPages: ['cohort', 'programType', 'programDate', 'applicantList'],
      graphFilters: { healthInnovation: true, education: true, youthEmpowerment: true }
    };

    this.handleCohortSelect = this.handleCohortSelect.bind(this);
    this.handleBackButtonSelect = this.handleBackButtonSelect.bind(this);
    this.handleProgramTypeSelect = this.handleProgramTypeSelect.bind(this);
    this.handleProgramDateSelect = this.handleProgramDateSelect.bind(this);
    this.handleOnFilterCheck = this.handleOnFilterCheck.bind(this);
  }
  
  handleCohortSelect(selectedCohort) {
    const { currentEnrollmentPage } = this.state;
    const nextPage = currentEnrollmentPage + 1;
    this.setState({ selectedCohort, currentEnrollmentPage: nextPage });
  }
  
  handleProgramTypeSelect(selectedProgramType) {
    const { currentEnrollmentPage } = this.state;
    const nextPage = currentEnrollmentPage + 1;
    this.setState({ selectedProgramType, currentEnrollmentPage: nextPage });
  }
  
  handleProgramDateSelect(selectedProgramId) {
    const { currentEnrollmentPage } = this.state;
    const { applicants, programs } = this.props;
    
    const nextPage = currentEnrollmentPage + 1;

    const confirmedApplicants = applicants
      .filter(applicant => (
        applicant.selectedProgramId === selectedProgramId &&
        applicant.status === 'confirmed'
      ));

    let selectedProgram = programs
      .filter(program => program.id === selectedProgramId);
    selectedProgram = selectedProgram.length ? selectedProgram[0] : {};
    
    const { waitlist = [] } = selectedProgram;
    const waitlistedApplicantsWithStatus = waitlist.map(app => {
      app.status = 'waitlist';
      return app;
    });
    
    this.setState({
      selectedProgramId,
      currentEnrollmentPage: nextPage,
      confirmedApplicants,
      waitlistedApplicants: waitlistedApplicantsWithStatus
    });
  }

  handleBackButtonSelect() {
    const { currentEnrollmentPage } = this.state;
    const prevPage = currentEnrollmentPage - 1;
    this.setState({ currentEnrollmentPage: prevPage });
  }

  handleOnFilterCheck(e, isInputChecked) {
    const programType = e.target.id;
    const { graphFilters } = this.state;
    const nextFilterState = Object.assign({}, graphFilters, {[programType]: isInputChecked});
    this.setState({ graphFilters: nextFilterState });
  }

  render() {
    const {
      cohorts,
      applicants,
      programs
    } = this.props;

    const {
      listOpenState,
      currentEnrollmentPage,
      enrollmentPages,
      selectedCohort,
      selectedProgramType,
      selectedProgramId,
      confirmedApplicants,
      waitlistedApplicants,
      graphFilters
    } = this.state;

    const renderPreviousPageButton = currentEnrollmentPage > 0 ? true : false;
    const programs2018 = programs.filter(program => program.year === 2018);

    return (
      <EnrollmentPage>
        <div>
          <SectionTitle>PROGRAM ENROLLMENT</SectionTitle>
          <Divider style={{marginLeft: 8, marginRight: 8}} />
          <EnrollmentContent
            cohorts={cohorts}
            selectedCohort={selectedCohort}
            selectedProgramType={selectedProgramType}
            selectedProgramId={selectedProgramId}
            confirmedApplicants={confirmedApplicants}
            waitlistedApplicants={waitlistedApplicants}
            applicants={applicants}
            programs={programs2018}
            handleCohortSelect={this.handleCohortSelect}
            handleProgramTypeSelect={this.handleProgramTypeSelect}
            handleProgramDateSelect={this.handleProgramDateSelect}
            handleBackButtonSelect={this.handleBackButtonSelect}
            handleOnFilterCheck={this.handleOnFilterCheck}
            currentEnrollmentPage={currentEnrollmentPage}
            enrollmentPages={enrollmentPages}
            graphFilters={graphFilters}
            renderPreviousPageButton={renderPreviousPageButton}
          />
        </div>
      </EnrollmentPage>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    cohorts = [],
    programs = [],
    applicants = [],
  } = state;
  
  return {
    cohorts,
    programs,
    applicants
  };
};

export default connect(mapStateToProps)(Enrollment);
