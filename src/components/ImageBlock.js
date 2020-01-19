import React, { Fragment } from 'react';
import {
	Grid, Typography
} from '@material-ui/core';
import { GridSpacer } from '.';
import {} from '.';

const ImageBlock = props => {
	const { image = '', title='' } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center">
			{
				Boolean(title) &&
				<Fragment>
					<Grid item xs={10}>
						<Typography variant="h6" style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: '800' }}>{title.toUpperCase()}</Typography>
					</Grid>
					<GridSpacer height="15" />
				</Fragment>
			}
			<Grid item xs={10} container justify="center">
				<img alt="" src={image} width="100%" height="auto" />
			</Grid>
		</Grid>
	)
}

export default ImageBlock;