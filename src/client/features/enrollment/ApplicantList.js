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
    handleApplicantRowSelect
  } = props;

  console.log('WAITLIST -->', waitlist);

  return (
    <Table
      height={'300px'}
      fixedHeader
      selectable
      onRowSelection={handleApplicantRowSelect}
    >
      <TableHeader
        adjustForCheckbox
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
            Super Header
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
        displayRowCheckbox
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
