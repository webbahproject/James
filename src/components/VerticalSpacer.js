import React from 'react';
import {
	Grid
} from '@material-ui/core';

const VerticalSpacer = props => {
	const { height } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center">
			<div style={{ height: height + 'px' }}></div>
		</Grid>
	);
}

export default VerticalSpacer;