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
  tableHeaderColumnOne : {
    textAlign: 'center',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    width: 30
  },
  tableRowColumn : {
    fontSize: '11px', 
    width: 120,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textAlign: 'center',
  },
  tableRowColumnOne : {
    fontSize: '11px',
    width: 30,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textAlign: 'center',
  }
};

const ApplicantTable = (props) => {
  const {
    tableHeaders = [],
    tableHeadersMap = [],
    applicants = [],
    handleRowSelect = () => {},
    selectable = true,
  } = props;
  
  function makeTableHeader(header, idx) {
    return (
      <TableHeaderColumn
        key={idx}
        style={ idx === 0 ? styles.tableHeaderColumnOne : styles.tableHeaderColumn }>
        {header}
      </TableHeaderColumn>
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

    const rowNumber = (
        <TableRowColumn
          style={styles.tableRowColumnOne}
          key={`${idx}-row-number`}>
          {idx + 1}
        </TableRowColumn>
      );

    const tableRowColumnsToRender = [rowNumber, ...tableRowColumns];

    return (
      <TableRow key={`row-${applicant.name}-${idx}`}>
        {tableRowColumnsToRender}
      </TableRow>
    );
  }
  
  let winHeight = window && window.innerHeight ?
    window.innerHeight - 160 :
    600;

  return (
    <Table
      height={winHeight}
      fixedHeader
      bodyStyle={{overflow: 'visible'}}
      onRowSelection={handleRowSelect}
      multiSelectable={selectable}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          {tableHeaders.map(makeTableHeader)}
        </TableRow>
      </TableHeader>
      <TableBody
        deselectOnClickaway={false}
        showRowHover={true}>
        {applicants.map(makeTableRow)}
      </TableBody>
    </Table>);
};

export default ApplicantTable;