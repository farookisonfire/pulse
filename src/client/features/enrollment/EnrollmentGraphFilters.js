import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const EnrollmentGraphFilters = (props) => {
  const {
    graphFilters,
    handleOnFilterCheck
  } = props;
  const {
    healthInnovation,
    youthEmpowerment,
    education
  } = graphFilters;

  return (
    <div 
      style={{
        border: '1px solid rgba(50,50,50,.3)'
      }}>
      <h3 style={{
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 400
        }}>Filters</h3>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    }}>
      <Checkbox
            style={{width: 155}}
            label="Health Innovation"
            labelStyle={{fontSize: 12}}
            id="healthInnovation"
            checked={healthInnovation}
            onCheck={handleOnFilterCheck}
      />
      <Checkbox
            style={{width: 155}}
            label="Youth Empowerment"
            labelStyle={{fontSize: 10}}
            id="youthEmpowerment"
            checked={youthEmpowerment}
            onCheck={handleOnFilterCheck}
      />
      <Checkbox
            style={{width: 125}}
            label="Education"
            labelStyle={{fontSize: 10}}
            id="education"
            checked={education}
            onCheck={handleOnFilterCheck}
      />
    </div>
    </div>
  );
};

export default EnrollmentGraphFilters;
