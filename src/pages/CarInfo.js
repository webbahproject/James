import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import {
	Grid
} from '@material-ui/core';
import {
	PureParagraph,
	GridSpacer,
	Simple3DCarousel,
	New3DCarousel
} from './../components';
import {
	Footer,
	CarDetail
} from '.';
import { Cars } from './../utils/Utils';
import styles from './../css/AboutMe.module.css';

const CarInfo = props => {
	const {} = props;
	const [data, setData] = useState([]);
	const history = useHistory();
	const location = useLocation();
	const isMatch = useRouteMatch('/car/:brand');

	useEffect(() => {
		setData(isMatch && Cars[isMatch.params.brand]);
	}, [isMatch]);

	return (
		<Grid container direction="row" className={styles.root}>
			<GridSpacer height="80" />
			{ Boolean(data.length) && <Simple3DCarousel slides={data} history={history} path={location} /> }
			<GridSpacer height="30" />
			<Grid item xs={12} container justify="center">
				<PureParagraph />
			</Grid>
			<CarDetail />
			<Footer />
		</Grid>
	);
}

export default CarInfo;