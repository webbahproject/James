import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
	Grid
} from '@material-ui/core';
import styles from './../css/Footer.module.css';

const Footer = props => {
	return (
		<Grid item xs={12} container direction="row" justify="center" alignItems="flex-end" className={styles.base}>
			<div className={styles.copyright}>
  				<span>© 2019 Careta2U | Made by Webbah</span>
  			</div>
		</Grid>
	)
}

export default Footer;