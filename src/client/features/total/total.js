import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card} from 'material-ui/Card';
import Applied from '../applied';
import AcceptedPage from '../accepted';
import Denied from '../denied';
import TableContainer from '../shared/TableContainer';
import SecondaryPage from '../secondary/SecondaryPage';

class Total extends React.Component{
  render() {
    return (
      <Card style={{height:"90vh"}}>
        <Tabs>
          <Tab label="Applied">
            <Applied />
          </Tab>
          <Tab label="Secondary">
            <SecondaryPage />
          </Tab>
          <Tab label="Accepted">
            <AcceptedPage />
          </Tab>
          <Tab label="Confirmed">
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

export default Total;
