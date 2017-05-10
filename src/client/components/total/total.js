import React from 'react';
import { Link } from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import ApplicantTable from './ApplicantTable';
import {connect} from 'react-redux';
import {fetchApplicants} from './applicantActions';
import {formatApplicants} from './applicantHelpers';
import RefreshBtn from './RefreshBtn';
import Spinner from 'react-spinkit';
import {spinner} from './applicantStyles';

class Total extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.fetchApplicants();
  }
  
  render() {
    return(
      <Card style={{height:"90vh"}}>
        <CardTitle>Applicants</CardTitle>
        <RefreshBtn onTouchTap={this.props.fetchApplicants}/>
        {this.props.fetching 
          ? <Spinner spinnerName="wave" noFadeIn style={spinner}/>
          : <ApplicantTable tableHeaders={this.props.tableHeaders} applicants={this.props.applicants}/>}
      </Card>
    );
  }
}

const mapStateToProps = ({applicants, fetching}) => {
  const tableHeaders = ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"];
  return {
    fetching,
    tableHeaders,
    applicants: formatApplicants(applicants)
  };
};

export default connect(mapStateToProps, {fetchApplicants})(Total);
