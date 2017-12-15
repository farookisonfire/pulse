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
    listOpenState = {}
  } = props;

  console.log('cohortCard', listOpenState)

  return (
    <Card
      style={{
        width: 250,
        display: 'inline-block',
        margin: '24px 12px',
      }}
    >
      <CardHeader
      title="Cohort A"
      subtitle="July 10 - July 20"
      actAsExpander={true}
      showExpandableButton={false}
      avatar={<Avatar>A</Avatar>}
    />
    <CardText expandable={true}>
      <CohortCardContent
        handleListToggle={handleListToggle}
        listOpenState={listOpenState}
      />
    </CardText>
  </Card>
  );
};

export default CohortCard;
