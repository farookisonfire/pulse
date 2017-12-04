import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import styled from 'styled-components';

const EnrollmentContentContainer = styled.div`
`;
  // display: flex;

const EnrollmentList = styled(List)`
  margin: 0 8px;
  padding: 0;
  border: 1px solid #ddd;
`;
  // flex-grow: 1;

const EnrollmentContent = (props) => {
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
    <EnrollmentContentContainer>
      <EnrollmentList>
        <ListItem
          primaryText="Health Innovation"
          secondaryText="20"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem primaryText="4 week" secondaryText='10' />,
            <ListItem primaryText="2 week" secondaryText='10' />,
          ]}
          onNestedListToggle={handleListToggle}
          open={healthInnovation}
          value={'healthInnovation'} />
        <ListItem
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
    </EnrollmentContentContainer>
  );
};

export default EnrollmentContent;
