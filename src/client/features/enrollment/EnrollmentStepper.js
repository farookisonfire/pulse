import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const EnrollmentStepper = (props) => {
  const { currentEnrollmentPage } = props;
  return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={currentEnrollmentPage}>
          <Step>
            <StepLabel>Select Cohort</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Program Type</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Program Date</StepLabel>
          </Step>
        </Stepper>
      </div>
  );
};

export default EnrollmentStepper;