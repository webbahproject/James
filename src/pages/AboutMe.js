import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
	Grid
} from '@material-ui/core';
import {
	Footer
} from '.';
import {
	ParagraphWithImageAndTitle,
	ParagraphWithTitle,
	PureParagraph,
	GridSpacer
} from './../components';
import styles from './../css/AboutMe.module.css';

const Body = props => {

	return (
		<Grid container direction="row" className={styles.root}>
			<GridSpacer height="80" />
			<Grid item xs={12}>
				<ParagraphWithImageAndTitle />
			</Grid>
			<Footer />
		</Grid>
	)
}

export default Body;