import React from 'react';
import styled from 'styled-components';

const EnrollmentTotalsContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px
`;

const EnrollmentTotals = ({ programEnrollment = {} }) => {
  const {
    enrolled = 0,
    confirmed = 0,
    waitlist = 0
  } = programEnrollment;

  return (
    <EnrollmentTotalsContainerDiv>
      <span style={{color: 'dodgerblue'}}>{enrolled}</span>
      <span style={{color: 'limegreen'}}>{confirmed}</span>
      <span style={{color: 'darkorange'}}>{waitlist}</span>
    </EnrollmentTotalsContainerDiv>
  );
};

export default EnrollmentTotals;
