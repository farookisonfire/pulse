import React from 'react';
import Subheader from 'material-ui/Subheader';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import CohortCard from './CohortCard';
import ProgramTypeCard from './ProgramTypeCard';
import ProgramDateCard from './ProgramDateCard';
import ApplicantList from './ApplicantList';
import EnrollmentStepper from './EnrollmentStepper';
import EnrollmentGraph from './EnrollmentGraph';
import EnrollmentGraphFilters from './EnrollmentGraphFilters';
import BackButton from '../shared/BackButton';


const EnrollmentContentContainer = styled.div`
  padding: 48px;
`;

const EnrollmentContent = (props) => {
  const { 
    handleCohortSelect,
    handleProgramTypeSelect,
    handleProgramDateSelect,
    handleOnFilterCheck,
    handleBackButtonSelect,
    cohorts,
    selectedCohort,
    selectedProgramType,
    selectedProgramId,
    confirmedApplicants,
    waitlistedApplicants,
    currentEnrollmentPage,
    enrollmentPages,
    applicants,
    programs,
    graphFilters,
    renderPreviousPageButton
  } = props;

  let compToRender;
  
  if (enrollmentPages[currentEnrollmentPage] === 'cohort') {
    const cohortCards = cohorts.map(cohort => {
      return (
        <CohortCard
          key={`cohort-card-${cohort.key}`}
          handleCohortSelect={handleCohortSelect}
          cohort={cohort}
          programs={programs}
        />
      );
    });
    compToRender = cohortCards;
  }
  if (enrollmentPages[currentEnrollmentPage] === 'programType') {
    const filteredPrograms = programs.filter(program => program.cohort.includes(selectedCohort));
    let programTypes = filteredPrograms.map(program => program.typeId);
    programTypes = new Set(programTypes);
    let programTypeCards = [];
    
    for (let type of programTypes) {
      programTypeCards.push(
        <ProgramTypeCard
          key={`program-type-card-${type}`}
          programType={type}
          handleProgramTypeSelect={handleProgramTypeSelect}
        />
      );
    }
    compToRender = programTypeCards;
  }

  if (enrollmentPages[currentEnrollmentPage] === 'programDate') {
    const programDates = programs
      .filter(program => program.cohort.includes(selectedCohort) && program.typeId === selectedProgramType);
    const programDateCards = programDates
      .map(program => (
      <ProgramDateCard
        key={`program-date-card-${program.id}`}
        program={program}
        handleProgramDateSelect={handleProgramDateSelect}
      />
      ));
    
    compToRender = programDateCards;
  }

  if (enrollmentPages[currentEnrollmentPage] === 'applicantList') {
    compToRender = (
      <ApplicantList
        confirmedApplicants={confirmedApplicants}
        waitlist={waitlistedApplicants}
        selectedCohort={selectedCohort}
        selectedProgramType={selectedProgramType}
        selectedProgramId={selectedProgramId}
        programs={programs}
      />);
  }

  return (
    <EnrollmentContentContainer>
      <EnrollmentGraphFilters
        handleOnFilterCheck={handleOnFilterCheck}
        graphFilters={graphFilters}
      />
      <EnrollmentGraph 
        applicants={applicants}
        programs={programs}
        graphFilters={graphFilters}
      />
      <Divider style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 56,
        marginBottom: 48,
        backgroundColor: 'rgba(158,158,158,.6)'
      }} />
      {renderPreviousPageButton ? <BackButton onTouchTap={handleBackButtonSelect} /> : <div style={{width: 48, height: 48}}/>}
      <EnrollmentStepper currentEnrollmentPage={currentEnrollmentPage} />
      {compToRender}
    </EnrollmentContentContainer>
  );
};

export default EnrollmentContent;
