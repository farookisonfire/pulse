import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import CohortCardContent from './CohortCardContent';

const ProgramDateCard = (props) => {
  const { 
    program = {},
    handleProgramDateSelect
  } = props;

  const {
    date,
    length,
    type,
    id   
  } = program;

  return (
    <Card
      onClick={() => handleProgramDateSelect(id)}
      style={{
        width: 250,
        display: 'inline-block',
        margin: '24px 12px',
        cursor: 'pointer'
      }}
    >
    <CardHeader
      title={date}
      subtitle={length}
    />
  </Card>
  );
};

export default ProgramDateCard;
