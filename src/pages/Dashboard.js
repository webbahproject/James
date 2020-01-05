import React from 'react';
import {
	Grid
} from '@material-ui/core';
import {
	AnimatedSlider
} from './../components';
import styles from './../css/Dashboard.module.css';

const Header = props => {

	return (
		<Grid container direction="row" className={styles.root}>
			<Grid item xs={12}>
				<AnimatedSlider />
			</Grid>
		</Grid>
	)
}

export default Header;