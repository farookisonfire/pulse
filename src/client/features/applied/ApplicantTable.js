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
    textAlign: 'center',
    whiteSpace: 'normal', 
    wordWrap: 'break-word',
  },

  tableRowColumn : {
    paddingLeft: '7.5px', 
    paddingRight: '7.5px', 
    fontSize: '11px', 
    whiteSpace: 'normal', 
    wordWrap: 'break-word',
  }
};

const ApplicantTable = (props) => {
  const {
    tableHeaders = [],
    tableHeadersMap = [],
    applicants = [],
    handleRowSelect = () => {},
  } = props;
  
  function makeTableHeader(header, idx) {
    return (
      <TableHeaderColumn key={idx} style={styles.tableHeaderColumn}>{header}</TableHeaderColumn>
    );
  }

  function makeTableRow(applicant, idx) {
    const tableRowColumns =  tableHeadersMap.map(header => {
      return (
        <TableRowColumn 
          style={styles.tableRowColumn} 
          key={`${idx}-${applicant[header]}`}>
          {applicant[header]}
        </TableRowColumn>
      );
    });

    return (
      <TableRow key={`row-${applicant.name}-${idx}`}>
        {tableRowColumns}
      </TableRow>
    );
  }
  
  return (
    <Table
      onRowSelection={handleRowSelect}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          {tableHeaders.map(makeTableHeader)}
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
        {applicants.map(makeTableRow)}
      </TableBody>
    </Table>);
};

export default ApplicantTable;