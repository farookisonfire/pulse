import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card} from 'material-ui/Card';
import Applied from '../applied';
import AcceptedPage from '../accepted';
import Denied from '../denied';
import TableContainer from '../shared/TableContainer';
import SecondaryPage from '../secondary/SecondaryPage';
import ConfirmedPage from '../confirmed/ConfirmedPage';
import { connect } from 'react-redux';
import { getInitialData } from './allAdmissionsActions';

class Total extends React.Component{
  
  componentDidMount() {
    const { getInitialData = () => {} } = this.props;
    getInitialData();
  }

  render() {
    const {
      programs = [],
      fellows = [],
    } = this.props;

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
            <ConfirmedPage
              programs={programs}/>
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getInitialData})(Total);
