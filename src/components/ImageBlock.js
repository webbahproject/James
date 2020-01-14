import React from 'react';
import {
	Grid
} from '@material-ui/core';
import {} from '.';

const ImageBlock = props => {
	const { image } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center">
			<Grid item xs={10} container justify="center">
				<img alt="" src={image} width="100%" height="auto" />
			</Grid>
		</Grid>
	)
}

export default ImageBlock;