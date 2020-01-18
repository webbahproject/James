import React from 'react';
import { withStyles } from '@material-ui/core';
import {
	Grid
} from '@material-ui/core';
import { ViewType } from './../utils/Utils';
import styles from './../css/Footer.module.css';

const componentStyles = theme => ({
	copyright: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: ( ViewType.desktop || ViewType.tab ) && '1rem' || '0.8rem',
	  marginTop: 60,
	  fontFamily:  'Roboto'
	}
})

const Footer = props => {
	const { classes } = props;

	return (
		<Grid item xs={12} container direction="row" justify="center" alignItems="flex-end" className={styles.base}>
			<div className={classes.copyright}>
  				<span>© 2020 MyCareta2U | Made by Webbah</span>
  			</div>
		</Grid>
	)
}

export default withStyles(componentStyles)(Footer);