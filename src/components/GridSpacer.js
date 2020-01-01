import React from 'react';
import {
	Grid
} from '@material-ui/core';

const GridSpacer = props => {
	const { classes, height } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center">
			<div style={{ height: height + 'px' }}></div>
		</Grid>
	);
}

export default GridSpacer;