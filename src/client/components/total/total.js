import React from 'react';
import { Link } from 'react-router';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TotalEnrolled from './totalEnrolled';

class Total extends React.Component {
  render() {
    return(
      <Card>
        <CardTitle>Total Enrollment</CardTitle>
        <CardText>
          <TotalEnrolled/>
        </CardText>
      </Card>
    );
  }
}

export default Total;
