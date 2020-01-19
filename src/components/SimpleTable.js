import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
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

const SimpleTable = props => {
  const { classes, config = {} } = props;
	const { tableheader = [], tablecontent = [], clickHandler = () => {} } = config;

	return (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow className={classes.tablerow}>
            {
              tableheader.map(header => (
                <TableCell key={'header--' + header}className={classes.tableheadcell}>{header}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody className={classes.tablebody}>
          {
            Boolean(tablecontent.length) && tablecontent.map(row => (
              <TableRow key={row.id} className={classes.tablerow}>
                {
                  (row.tablecells).map( (cell, idx) => {
                    switch(typeof cell){
                      case 'string':
                      return (
                        <TableCell key={idx} className={classes.tablebodycell}>{cell}</TableCell> 
                      );

                      case 'object':
                      return (
                        <TableCell key={idx} className={classes.tablebodycell}>
                          <Button variant="contained" color="secondary" onClick={evt => clickHandler(cell.type)}>Mohon!</Button>
                        </TableCell> 
                      );

                      default:
                      return null;
                    }
                  })
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