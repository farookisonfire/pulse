import React from 'react';
import styled from 'styled-components';
import {List, ListItem} from 'material-ui/List';
import { resolveProgramTypeEnrollment } from '../../utils/utils';
import EnrollmentTotals from './EnrollmentTotals';

const EnrollmentList = styled(List)`
  
`;

const CohortCardContent = (props) => {
  const { 
    handleListToggle,
    listOpenState,
    programs = [],
    cohortName = '',
    allProgramEnrollment = {}
  } = props;

  const {
    healthInnovation,
    youthEmpowerment,
    education,
    selectedCohort
  } = listOpenState;


  const filteredPrograms = programs.filter(program => program.cohort.includes(cohortName));
  let programTypes = filteredPrograms.map(program => program.typeId);
  programTypes = new Set(programTypes);
  let programTypeListItems = []; 
  
  for (let type of programTypes) {
    const availablePrograms = filteredPrograms.map((program) => {
      if (program.typeId === type) {
        const programEnrollment = allProgramEnrollment[program.id] || {};

        return (
          <ListItem
            key={`available-program-${program.id}`}
            style={{ fontSize: 14 }}
            primaryText={`${program.length} | ${program.date}`}
            secondaryText={<EnrollmentTotals programEnrollment={programEnrollment}/>} />
        );
      }
      return null;
    });

    const programTypeEnrollment = resolveProgramTypeEnrollment(filteredPrograms, type);
    
    programTypeListItems.push(
      <ListItem
        key={`cohort-${cohortName}-content-${type}`}
        style={{ fontSize: 14 }}
        rightToggle={null}
        primaryText={type}
        secondaryText={<EnrollmentTotals programEnrollment={programTypeEnrollment}/>}
        primaryTogglesNestedList={true}
        nestedItems={availablePrograms}
        onNestedListToggle={(item) => handleListToggle(item, cohortName)}
        open={listOpenState[type] && cohortName === selectedCohort}
        value={type}
      />
    );
  }

  return (
    <EnrollmentList>
      {programTypeListItems}
    </EnrollmentList>
  );
};

export default CohortCardContent;
