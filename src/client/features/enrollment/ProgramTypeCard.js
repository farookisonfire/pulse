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

const ProgramTypeCard = (props) => {
  const { 
    programType,
    handleProgramTypeSelect
  } = props;

  let cardTitle;
  if (programType === 'healthInnovation') cardTitle = 'Health Innovation';
  if (programType === 'education') cardTitle = 'Education';
  if (programType === 'youthEmpowerment') cardTitle = 'Youth Empowerment';

  return (
    <Card
      onClick={() => handleProgramTypeSelect(programType)}
      style={{
        width: 250,
        display: 'inline-block',
        margin: '24px 12px',
        cursor: 'pointer'
      }}
    >
    <CardHeader
      title={cardTitle}
    />
  </Card>
  );
};

export default ProgramTypeCard;
