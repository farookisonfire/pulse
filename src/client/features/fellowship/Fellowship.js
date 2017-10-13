import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card} from 'material-ui/Card';
import { connect } from 'react-redux';
import { getInitialData } from '../total/allAdmissionsActions';
import FellowsPage from './FellowsPage';
import { formatConfirmedFellows, resolveProgramTypeAndDate } from '../../utils/utils';

class Fellowship extends React.Component{
  
  componentDidMount() {
    const { getInitialData = () => {} } = this.props;
    getInitialData();
  }

  render() {
    const {
      fellows = [],
      fellowshipPageData = {},
    } = this.props;

    return (
      <Card style={{height:"90vh"}}>
        <Tabs>
          <Tab label="Fellows">
            <FellowsPage
              fellows={fellows}
              fellowshipPageData={fellowshipPageData} />
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    fellows,
    pageProfiles,
    programs,
  } = state;

  const { fellowshipPage } = pageProfiles;
  const formattedFellows = formatConfirmedFellows(fellows, 'confirmed');
  const formattedWithProgram = resolveProgramTypeAndDate(formattedFellows, programs);

  return {
    fellows: formattedWithProgram,
    fellowshipPageData: fellowshipPage, 
  };

};

export default connect(mapStateToProps, {getInitialData})(Fellowship);
