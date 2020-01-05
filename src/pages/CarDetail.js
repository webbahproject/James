import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Modal, Typography } from '@material-ui/core';
import { Cars } from './../utils/Utils';
import { SimpleTable } from './../components';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const styles = theme => ({
	paper: {
    position: 'absolute',
    width: windowWidth > 800 ? windowWidth * 0.65 : windowWidth * 0.9,
    height: windowHeight * 0.9,
    backgroundColor: '#141414',
    boxShadow: theme.shadows[5]
  },
  bold: {
  	fontWeight: 800
  },
  popheader: {
  	height: 'auto',
  	paddingTop: 20,
  	paddingBottom: 20,
  	paddingLeft: '10%'
  },
  content: {
  	maxHeight: 400, 
  	overflowY: 'scroll',
  },
  popcontent: {
  	height: 'auto',
  	paddingTop: 20,
  	paddingBottom: 40
  },
  popfooter: {
  	height: 'auto',
  	paddingTop: 10,
  	paddingBottom: 10,
  	backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  footerlabel: {

  }
});

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CarDetail = props => {
	const { classes, car = {} } = props;
	const { imgUrl = '', appender = '', title = '' } = car; 
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const isMatch = useRouteMatch('/car/:brand/:type');
  const location = useLocation();
  const history = useHistory();
  const tabledata = null;

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  useEffect(() => {
  	setOpen(isMatch && isMatch.isExact || false);
  }, [isMatch]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
    	<div style={modalStyle} className={classes.paper}>
	      <Grid container direction="row">
	      	<Grid item xs={12}>
	      		<div style={{ backgroundImage: 'url(' + imgUrl + ')', backgroundSize: 'cover', height: 200, width: '100%' }} /> 
	      	</Grid>
	      	<Grid item xs={12} container className={classes.content}>
	      		<Grid item xs={12} container alignItems="center" className={classes.popheader}>
		      		<Typography variant="h5" className={classes.bold}>
		      			{title}
		      		</Typography>
		      	</Grid>
		      	<Grid item xs={12} container justify="center" className={classes.popcontent}>
		      		<SimpleTable data={{ tableheader: [], tablecontent: null }}  />
		      	</Grid>
	      	</Grid>
	      	<Grid item xs={12} container justify="center" className={classes.popfooter}>
	      		<Typography variant="caption" className={classes.footerlabel}>Careta2u</Typography>
	      	</Grid>
	      </Grid>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(CarDetail);