import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const styles = theme => ({

});

const CarDetail = props => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  // useEffect(() => {
  // 	setOpen(isTypePage && isTypePage.isExact || false);
  // }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(CarDetail);