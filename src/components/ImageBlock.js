import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Grid
} from '@material-ui/core';

const styles = theme => ({
	background: {
		backgroundSize:'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		height: 'auto'
	}
});

const ImageBlock = props => {
	const { classes, image = '' } = props;

	return (
		<Grid item xs={12}>
			<div className={classes.background} style={{ backgroundImage: 'url('+ image +')' }} />
		</Grid>
	);
}

export default withStyles(styles)(ImageBlock);