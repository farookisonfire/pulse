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
    textAlign: 'center',
    whiteSpace: 'normal', 
    wordWrap: 'break-word',
    width: 120

  },

  tableRowColumn : {
    fontSize: '11px', 
    width: 120,
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
    selectable = '',
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
      bodyStyle={{overflow: 'visible'}}
      onRowSelection={handleRowSelect}
      selectable={selectable}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          {tableHeaders.map(makeTableHeader)}
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={true}>
        {applicants.map(makeTableRow)}
      </TableBody>
    </Table>);
};

export default ApplicantTable;