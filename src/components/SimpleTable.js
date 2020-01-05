import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

const styles = theme => ({
  paper: {
    backgroundColor: 'transparent',
  },
  table: {
    color: 'grey'
  },
  tablehead: {
  },
  tablebody: {},
  tablerow: {},
  tableheadcell: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '800 !important',
    borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
  },
  tablebodycell: {
    color: 'rgba(255, 255, 255, 0.6)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
  }
});

const testData = {
  tableheader: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
  tablecontent: [
    { id: 1, tablecells: ['V1', 'V2', 'V3', 'V4', 'V5'] },
    { id: 2, tablecells: ['V1', 'V2', 'V3', 'V4', 'V5'] },
    { id: 3, tablecells: ['V1', 'V2', 'V3', 'V4', 'V5'] }    
  ]
};

const SimpleTable = props => {
  const { classes, data = {} } = props;
	const { tableheader = [], tablecontent = [] } = testData;

	return (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow className={classes.tablerow}>
            {
              tableheader.map(header => (
                <TableCell className={classes.tableheadcell}>{header}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody className={classes.tablebody}>
          {
            Boolean(tablecontent.length) && tablecontent.map(row => (
              <TableRow key={row.id} className={classes.tablerow}>
                {
                  (row.tablecells).map(cell => (
                     <TableCell className={classes.tablebodycell}>{cell}</TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SimpleTable);