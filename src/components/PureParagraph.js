import React from 'react';
import {
	Grid,
	Typography
} from '@material-ui/core';
import {} from '.';
import styles from './../css/ParagraphWithImageAndTitle.module.css';

const PureParagraph = props => {
	const { text } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center" className={styles.base}>
			<Grid item xs={10} container justify="center" className={styles.content}>
				<Typography variant="subtitle1" className={styles.contentText} align="left">
					{text}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default PureParagraph;