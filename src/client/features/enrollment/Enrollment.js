import React, { Component } from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import EnrollmentContent from './EnrollmentContent';
import BackButton from '../shared/BackButton';
import { resolveAllProgramEnrollment } from '../../utils/utils';

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
      enrollmentPages: ['cohort', 'programType', 'programDate', 'applicantList']
    };

    this.handleCohortSelect = this.handleCohortSelect.bind(this);
    this.handleBackButtonSelect = this.handleBackButtonSelect.bind(this);
    this.handleProgramTypeSelect = this.handleProgramTypeSelect.bind(this);
    this.handleProgramDateSelect = this.handleProgramDateSelect.bind(this);
  }
  
  componentDidMount() {
    const { applicants = [] } = this.props;
    const allEnrolledApplicants = applicants
      .filter(applicant =>
        applicant.status === 'confirmed' ||
        applicant.status === 'waitlist' ||
        applicant.status === 'defer-enroll');
    
    const allProgramEnrollment = resolveAllProgramEnrollment(allEnrolledApplicants);
    this.setState({allProgramEnrollment});
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
    console.log('waitlist -->', typeof waitlist);
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

  // handleApplicantRowSelect(row) {
  //   const {
  //     confirmedApplicants,
  //     waitlistedApplicants
  //   } = this.state;

  //   const selectedRow = row[0];
  //   const applicantList = [...confirmedApplicants, ...waitlistedApplicants];
  // }

  render() {
    const {
      cohorts,
      applicants,
      programs
    } = this.props;

    const {
      listOpenState,
      allProgramEnrollment,
      currentEnrollmentPage,
      enrollmentPages,
      selectedCohort,
      selectedProgramType,
      selectedProgramId,
      confirmedApplicants,
      waitlistedApplicants
    } = this.state;

    console.log('cohorts', cohorts);
    console.log('applicants', applicants);
    console.log('programs', programs);
    console.log('enrollmentPage state', this.state);
    console.log('allProgramEnrollment', allProgramEnrollment);

    const renderPreviousPageButton = currentEnrollmentPage > 0 ? true : false;
    const programs2018 = programs.filter(program => program.year === 2018);

    return (
      <EnrollmentPage>
        <div>
          <SectionTitle>PROGRAM ENROLLMENT</SectionTitle>
          <Divider style={{marginLeft: 8, marginRight: 8}} />
          {renderPreviousPageButton && <BackButton onTouchTap={this.handleBackButtonSelect} />}
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
            currentEnrollmentPage={currentEnrollmentPage}
            enrollmentPages={enrollmentPages}
            allProgramEnrollment={allProgramEnrollment}
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
