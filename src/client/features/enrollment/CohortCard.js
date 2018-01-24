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
    handleCohortSelect = () => {},
    cohort = {},
    programs,
  } = props;

  const {
    key,
    name,
    dateRange,
  } = cohort;

  return (
    <Card
      onClick={() => handleCohortSelect(name)}
      style={{
        width: 250,
        display: 'inline-block',
        margin: '24px 12px',
        cursor: 'pointer'
      }}
    >
    <CardHeader
      title={`Cohort ${name}`}
      subtitle={dateRange}
      avatar={<Avatar>{name}</Avatar>}
    />
  </Card>
  );
};

export default CohortCard;
