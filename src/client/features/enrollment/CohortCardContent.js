import React from 'react';
import styled from 'styled-components';
import {List, ListItem} from 'material-ui/List';

const EnrollmentList = styled(List)`
  
`;

const CohortCardContent = (props) => {
  const { 
    handleListToggle,
    listOpenState
  } = props;

  const {
    healthInnovation,
    youthEmpowerment,
    education
  } = listOpenState;

  return (
    <EnrollmentList>
      <ListItem
        style={{ fontSize: 14 }}
        rightToggle={null}
        primaryText="Health Innovation"
        secondaryText="20"
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem style={{ fontSize: 14 }} primaryText="4 week" secondaryText='10' />,
          <ListItem style={{ fontSize: 14 }} primaryText="2 week" secondaryText='10' />,
        ]}
        onNestedListToggle={handleListToggle}
        open={healthInnovation}
        value={'healthInnovation'} />
      <ListItem
        style={{ fontSize: 14 }}
        primaryText="Youth Empowerment"
        secondaryText="20"
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem primaryText="Drafts" />
        ]}
        onNestedListToggle={handleListToggle}
        open={youthEmpowerment}
        value={'youthEmpowerment'} />
      <ListItem
        style={{ fontSize: 14 }}
        primaryText="Education / Social Work"
        secondaryText="20"
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem primaryText="Drafts" />
        ]}
        onNestedListToggle={handleListToggle}
        open={education}
        value={'education'} />
    </EnrollmentList>
  );
};

export default CohortCardContent;
