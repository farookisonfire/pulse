import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import CohortCardContent from './CohortCardContent';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const CohortCard = (props) => {
  const { 
    handleListToggle = () => {},
    listOpenState = {},
    cohort = {},
    programs,
    allProgramEnrollment
  } = props;

  const {
    key,
    name,
    dateRange,
  } = cohort;

  return (
    <Card
      style={{
        width: 250,
        display: 'inline-block',
        margin: '24px 12px',
      }}
    >
    <CardHeader
      title={`Cohort ${name}`}
      subtitle={dateRange}
      actAsExpander={true}
      showExpandableButton={false}
      avatar={<Avatar>{name}</Avatar>}
    />
    <CardText expandable={true}>
      <CohortCardContent
        handleListToggle={handleListToggle}
        listOpenState={listOpenState}
        programs={programs}
        cohortName={name}
        allProgramEnrollment={allProgramEnrollment}
      />
    </CardText>
  </Card>
  );
};

export default CohortCard;
