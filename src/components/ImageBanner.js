import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Grid
} from '@material-ui/core';

const styles = theme => ({
	background: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 20,
      content: '""',
      backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, #141414 100%)'
    }
  },
});

const ImageBanner = props => {
	const { classes, image = '' } = props;

	return (
		<Grid item xs={12}>
			<div className={classes.background}>
				<img alt="" src={image} width="100%" height="auto" /> 
			</div>
		</Grid>
	);
}

export default withStyles(styles)(ImageBanner);