import React from 'react';
import {
	Grid,
	Typography
} from '@material-ui/core';
import {
	GridSpacer
} from '.';
import styles from './../css/ParagraphWithImageAndTitle.module.css';

const ParagraphWithTitle = props => {
	const { text } = props;
	const { title, content } = text;

	return (
		<Grid item xs={12} container direction="row" justify="center" className={styles.base}>
			<Grid item xs={8} container>
				<Grid item xs={12} container justify="flex-start" className={styles.header}>
					<Typography variant="h5" className={styles.headerText}>
						{title}
					</Typography>
				</Grid>
				<GridSpacer height="25" />
				<Grid item xs={12} container justify="flex-start" className={styles.content}>
					{
						content.map( (para, idx) => (
							<Typography key={idx} variant="subtitle1" className={styles.contentText}>
								{para}
							</Typography>
						))
					}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ParagraphWithTitle;