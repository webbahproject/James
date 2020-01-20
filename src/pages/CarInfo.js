import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import {
	Grid, Typography
} from '@material-ui/core';
import {
	PureParagraph, GridSpacer, Simple3DCarousel, ImageBanner, ImageBlock
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
		setHeader(isMatch && Cars[isMatch.params.brand] ? Cars[isMatch.params.brand].header : '');
		setSlides(isMatch && Cars[isMatch.params.brand] ? Cars[isMatch.params.brand].slides : []);
		setDescription(isMatch && Cars[isMatch.params.brand] ? Cars[isMatch.params.brand].description : '');
		setPromotion(isMatch && Cars[isMatch.params.brand] ? Cars[isMatch.params.brand].promotion : '');
	}, [isMatch.params.brand]);

	return (
		<Grid container direction="row" className={styles.root}>
			{ Boolean(header) && <ImageBanner image={header} />}
			<GridSpacer height="30" />
			{ Boolean(slides.length) && <Simple3DCarousel slides={slides} history={history} path={location} /> }
			{ Boolean(description) && <PureParagraph text={description} /> }
			{ 
				Boolean(promotion) && 
				<ImageBlock image={promotion} title={'Promosi terbaru'} />
			}
			{
				!Boolean(header) && !Boolean(slides.length) && !Boolean(description) && !Boolean(promotion) &&
				<Grid item xs={12} style={{ paddingLeft: '5%', paddingRight: '5%' }}>
					<Typography variant="h6" align="center">Masih di dalam pembikinan. Akan datang tidak lama lagi!</Typography>
				</Grid>
			}
			<GridSpacer height="50" />
			<CarDetail />
			<Footer />
		</Grid>
	);
}

export default CarInfo;