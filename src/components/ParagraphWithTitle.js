import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
	Grid,
	Avatar,
	Typography
} from '@material-ui/core';
import {
	GridSpacer
} from '.';
import styles from './../css/ParagraphWithImageAndTitle.module.css';

const mock = {
	title: 'This is my title',
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const ParagraphWithTitle = props => {
	return (
		<Grid item xs={12} container direction="row" justify="center" className={styles.base}>
			<Grid item xs={4} container direction="row" justify="center"></Grid>
			<Grid item xs={8} container>
				<Grid item xs={10} container justify="flex-start" className={styles.header}>
					<Typography variant="h5" className={styles.headerText}>
						{mock.title}
					</Typography>
				</Grid>
				<GridSpacer height="25" />
				<Grid item xs={10} container justify="flex-start" className={styles.content}>
					<Typography variant="subtitle1" className={styles.contentText}>
						{mock.content}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ParagraphWithTitle;