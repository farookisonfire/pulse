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
import { resolveApplicantsToUse } from '../../utils/utils';

class Total extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Applied'
    };

    this.onActive = this.onActive.bind(this);
  }


  componentDidMount() {
    const { getInitialData = () => {} } = this.props;
    getInitialData();
  }

  onActive({props = {}}) {
    const {label = '' } = props;
    this.setState({activeTab: label});
  }

  render() {
    const {
      programs = [],
      fellows = [],
      applicants = [],
    } = this.props;

    const {
      activeTab = '',
    } = this.state;

    const applicantsToUse = resolveApplicantsToUse(applicants, activeTab, programs);

    return (
      <Card style={{height:"90vh"}}>
        <Tabs>
          <Tab onActive={this.onActive} label="Applied">
            <Applied
              applicants={activeTab === 'Applied' ? applicantsToUse : []}
            />
          </Tab>
          <Tab onActive={this.onActive} label="Secondary">
            <SecondaryPage
              applicants={activeTab === 'Secondary' ? applicantsToUse : []}
            />
          </Tab>
          <Tab onActive={this.onActive} label="Accepted">
            <AcceptedPage
              applicants={activeTab === 'Accepted' ? applicantsToUse : []}
            />
          </Tab>
          <Tab onActive={this.onActive} label="Confirmed">
            <ConfirmedPage
              applicants={activeTab === 'Confirmed' ? applicantsToUse : []}
              programs={programs}/>
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getInitialData})(Total);
