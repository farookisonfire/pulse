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
    listOpenState
  } = props;

  console.log('enrollmentContent', listOpenState)

  return (
    <EnrollmentContentContainer>
      <CohortCard
        handleListToggle={handleListToggle}
        listOpenState={listOpenState}
      />
      <CohortCard />
      <CohortCard />
      <CohortCard />
      <CohortCard />
      <CohortCard />
    </EnrollmentContentContainer>
  );


  // return (
  //   <EnrollmentContentContainer>
  //     <EnrollmentList>
  //       <ListItem
  //         primaryText="Health Innovation"
  //         secondaryText="20"
  //         primaryTogglesNestedList={true}
  //         nestedItems={[
  //           <ListItem primaryText="4 week" secondaryText='10' />,
  //           <ListItem primaryText="2 week" secondaryText='10' />,
  //         ]}
  //         onNestedListToggle={handleListToggle}
  //         open={healthInnovation}
  //         value={'healthInnovation'} />
  //       <ListItem
  //         primaryText="Youth Empowerment"
  //         secondaryText="20"
  //         primaryTogglesNestedList={true}
  //         nestedItems={[
  //           <ListItem primaryText="Drafts" />
  //         ]}
  //         onNestedListToggle={handleListToggle}
  //         open={youthEmpowerment}
  //         value={'youthEmpowerment'} />
  //       <ListItem
  //         primaryText="Education / Social Work"
  //         secondaryText="20"
  //         primaryTogglesNestedList={true}
  //         nestedItems={[
  //           <ListItem primaryText="Drafts" />
  //         ]}
  //         onNestedListToggle={handleListToggle}
  //         open={education}
  //         value={'education'} />
  //     </EnrollmentList>
  //   </EnrollmentContentContainer>
  // );
};

export default EnrollmentContent;
