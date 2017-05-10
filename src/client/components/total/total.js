import React from 'react';
import { Link } from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import ApplicantTable from './ApplicantTable';
import {connect} from 'react-redux';
import {fetchApplicants} from './applicantActions';

class Total extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.fetchApplicants();
  }
  
  render() {
    console.log('table headers', this.props.tableHeaders);
    console.log('applicants', this.props.applicants);
    return(
      <Card>
        <CardTitle>Applicants</CardTitle>
        <ApplicantTable tableHeaders={this.props.tableHeaders} applicants={this.props.applicants}/>
      </Card>
    );
  }
}

const formatApplicants = (applicants) => {
  
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
        const format = {};
        format.name = applicant["First Name"] + ' ' + applicant["Last Name"];
        format.email = applicant["Email"];
        format.phone = applicant["Mobile Phone Number"];
        format.dob = applicant["Date of Birth"];
        format.gender = applicant["Gender"];
        applicant["University you attend(ed)"] === '- Other University -' 
          ? format.university = applicant["Name of University"]
          : format.university = applicant["University you attend(ed)"];
        format.why = applicant["Why do you want to volunteer with OHS?"];
        format.program = applicant["Which program are you most interested in?"];
        
        formatted.push(format);
      });
  }
  return formatted;
};

const mapStateToProps = ({applicants}) => {
  console.log('original', applicants)
  const tableHeaders = ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"];
  return {
    tableHeaders,
    applicants: formatApplicants(applicants)
  };
};

export default connect(mapStateToProps, {fetchApplicants})(Total);
