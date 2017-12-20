import React from 'react';
import Subheader from 'material-ui/Subheader';
import styled from 'styled-components';
import CohortCard from './CohortCard';

const EnrollmentContentContainer = styled.div`
  padding: 48px;
`;

const EnrollmentContent = (props) => {
  const { 
    handleListToggle,
    listOpenState,
    cohorts,
    applicants,
    programs,
    allProgramEnrollment
  } = props;

  const cohortCards = cohorts.map(cohort => {
    return (
      <CohortCard
        key={`cohort-card-${cohort.key}`}
        handleListToggle={handleListToggle}
        listOpenState={listOpenState}
        cohort={cohort}
        programs={programs}
        allProgramEnrollment={allProgramEnrollment}
      />
    );
  });

  return (
    <EnrollmentContentContainer>
      {cohortCards}
    </EnrollmentContentContainer>
  );
};

export default EnrollmentContent;
