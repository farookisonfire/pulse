import React, { Component } from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import EnrollmentContent from './EnrollmentContent';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { resolveAllProgramEnrollment } from '../../utils/utils';

const EnrollmentPage = styled.div`
  background-color: white;
  min-height: calc(100vh - 64px);
`;

const SectionTitle = styled.h2`
  margin: 0;
  margin-left: 16px;
  color: rgba(50,50,50,.75);
  padding: 32px 8px 24px 8px;
  font-weight: 200;
  font-size: 22px;
`;

class Enrollment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpenState: {
        healthInnovation: false,
        youthEmpowerment: false,
        education: false,
        selectedCohort: ''
      },
      allProgramEnrollment: {}
    };

    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
  }
  
  handleNestedListToggle(item, selectedCohort) {
    const { open } = item.state;
    const { value = '' } = item.props;
    const newState = Object.assign({}, this.state.listOpenState, {
      [value]:open,
      selectedCohort
    });

    this.setState({listOpenState: newState});
  }

  componentDidMount() {
    const { applicants = [] } = this.props;
    const allEnrolledApplicants = applicants
      .filter(applicant =>
        applicant.status === 'confirmed' ||
        applicant.status === 'waitlist' ||
        applicant.status === 'defer-enroll');
    
    const allProgramEnrollment = resolveAllProgramEnrollment(allEnrolledApplicants);
    this.setState({allProgramEnrollment});
  }

  render() {
    const {
      cohorts,
      applicants,
      programs
    } = this.props;

    const {
      listOpenState,
      allProgramEnrollment,
    } = this.state;

    return (
      <EnrollmentPage>
        <div>
          <SectionTitle>PROGRAM ENROLLMENT</SectionTitle>
          <Divider style={{marginLeft: 8, marginRight: 8}} />
          <EnrollmentContent
            cohorts={cohorts}
            applicants={applicants}
            programs={programs}
            handleListToggle={this.handleNestedListToggle}
            listOpenState={listOpenState}
            allProgramEnrollment={allProgramEnrollment}
          />
        </div>
      </EnrollmentPage>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    cohorts = [],
    programs = [],
    applicants = [],
  } = state;
  
  return {
    cohorts,
    programs,
    applicants
  };
};

export default connect(mapStateToProps)(Enrollment);
