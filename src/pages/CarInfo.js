import React, { useEffect, useState } from 'react';
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
import styles from './../css/AboutMe.module.css';

const testData = [
	{ imgUrl: '/images/proton/Saga.png', title: 'Proton Saga', appender: 'Saga' },
	{ imgUrl: '/images/proton/Iriz.png', title: 'Proton Iriz', appender: 'Iriz' },
	{ imgUrl: '/images/proton/Persona.png', title: 'Proton Persona', appender: 'Persona' },
	{ imgUrl: '/images/proton/Exora.png', title: 'Proton Exora', appender: 'Exora' },
	{ imgUrl: '/images/proton/X70.jpg', title: 'Proton X70', appender: 'X70' },
];

const CarInfo = props => {
	const {} = props;
	const history = useHistory();
	const location = useLocation();
	const { pathname } = location;
	const isTypePage = useRouteMatch('/car/:brand/:type');
	const [open, setOpen] = useState(false);

	console.log('Can i see what is location ::: ', location, location.state);

	useEffect(() => {
		setOpen(isTypePage && isTypePage.isExact || false);
	}, [location]);

	return (
		<Grid container direction="row" className={styles.root}>
			<GridSpacer height="80" />
			<Simple3DCarousel slides={testData} history={history} path={pathname} />
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