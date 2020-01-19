import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import {
	Grid
} from '@material-ui/core';
import {
	PureParagraph,
	GridSpacer,
	Simple3DCarousel,
	ImageBanner,
	ImageBlock
} from './../components';
import {
	Footer,
	CarDetail
} from '.';
import { Cars } from './../utils/Utils';
import styles from './../css/AboutMe.module.css';

const CarInfo = props => {
	const [header, setHeader] = useState('');
	const [slides, setSlides] = useState([]);
	const [description, setDescription] = useState('');
	const [promotion, setPromotion] = useState('');
	const history = useHistory();
	const location = useLocation();
	const isMatch = useRouteMatch('/car/:brand');

	useEffect(() => {
		setHeader(isMatch && Cars[isMatch.params.brand].header);
		setSlides(isMatch && Cars[isMatch.params.brand].slides);
		setDescription(isMatch && Cars[isMatch.params.brand].description);
		setPromotion(isMatch && Cars[isMatch.params.brand].promotion);
	}, [isMatch]);

	return (
		<Grid container direction="row" className={styles.root}>
			{ Boolean(header) && <ImageBanner image={header} />}
			<GridSpacer height="30" />
			{ Boolean(slides.length) && <Simple3DCarousel slides={slides} history={history} path={location} /> }
			<PureParagraph text={description} />
			{ 
				Boolean(promotion) && 
				<ImageBlock image={promotion} title={'Promosi terbaru'} />
			}
			<GridSpacer height="50" />
			<CarDetail />
			<Footer />
		</Grid>
	);
}

export default CarInfo;