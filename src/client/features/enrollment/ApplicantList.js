import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ApplicantList = (props) => {
  const { 
    confirmedApplicants = [],
    waitlist = [],
    selectedCohort,
    selectedProgramType,
    selectedProgramId,
    programs
  } = props;

  let programType;
  if (selectedProgramType === 'healthInnovation') programType = 'Health Innovation';
  if (selectedProgramType === 'education') programType = 'Education';
  if (selectedProgramType === 'youthEmpowerment') programType = 'Youth Empowerment';

  let selectedProgram = programs.filter(program => program.id === selectedProgramId);
  selectedProgram = selectedProgram.length ? selectedProgram[0] : {};

  const { date } = selectedProgram;


  return (
    <Table
      height={'300px'}
      fixedHeader
      selectable={false}
    >
      <TableHeader
        adjustForCheckbox={false}
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
            {`Cohort ${selectedCohort} - ${programType} - ${date}`}
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover
        displayRowCheckbox={false}
        stripedRows={false}
      >
        {confirmedApplicants.map((applicant) => {
          return (
            <TableRow key={applicant._id}>
              <TableRowColumn>{applicant.status}</TableRowColumn>
              <TableRowColumn>{`${applicant['First Name']} ${applicant['Last Name']}`}</TableRowColumn>
              <TableRowColumn>{applicant['Email']}</TableRowColumn>
            </TableRow>
          );
        })}

        {waitlist.map((applicant) => {
          return (
            <TableRow key={`waitlist-${applicant.email}`}>
              <TableRowColumn>{applicant.status}</TableRowColumn>
              <TableRowColumn>{`${applicant.firstName} ${applicant.lastName}`}</TableRowColumn>
              <TableRowColumn>{applicant.email}</TableRowColumn>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ApplicantList;
