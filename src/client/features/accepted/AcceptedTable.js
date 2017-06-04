import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  
  tableHeaderColumn : {
    paddingLeft: '7.5px',
    paddingRight: '7.5px',
    textAlign: 'center'
  },

  tableRowColumn : {
    paddingLeft: '7.5px', 
    paddingRight: '7.5px', 
    fontSize: '11px', 
    whiteSpace: 'normal', 
    wordWrap: 'break-word' 
  }
};

const AcceptedTable = ({tableHeaders, acceptedApplicants}) => {
  
  function makeTableHeader(header, idx) {
    return (
      <TableHeaderColumn key={idx} style={styles.tableHeaderColumn}>{header}</TableHeaderColumn>
    );
  }

  function makeTableRow(applicant, idx) {
    return (
      <TableRow key={idx}>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.name}`} >{applicant.name}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.email}`} >{applicant.email}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.phone}`} >{applicant.phone}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.dob}`} >{applicant.dob}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.gender}`} >{applicant.gender}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.university}`} >{applicant.university}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.program}`} >{applicant.program}</TableRowColumn>
        <TableRowColumn style={styles.tableRowColumn} key={`${idx}-${applicant.why}`} >{applicant.why}</TableRowColumn>
      </TableRow>
    );
  }
  
  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          {tableHeaders.map(makeTableHeader)}
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
        {acceptedApplicants.map(makeTableRow)}
      </TableBody>  
    </Table>);
};

export default AcceptedTable;