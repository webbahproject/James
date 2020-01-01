import React from 'react';
import { useHistory } from 'react-router-dom';
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
	Footer
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

	const goToDetail = appender => {
		console.log('Let me see what is appender ::: ', appender);
	}

	const CreateImgSlides = () => {
		let arr = [];

		testData.map(obj => {
			arr.push(<img key={obj.title} alt="" src={obj.imgUrl} title={obj.title} />);
		});

		return arr;
	}

	return (
		<Grid item xs={12} container direction="row" className={styles.root}>
			<GridSpacer height="80" />
			<Simple3DCarousel slides={testData} />
			<GridSpacer height="30" />
			<Grid item xs={12} container justify="center">
				<PureParagraph />
			</Grid>
			<Footer />
		</Grid>
	);
}

export default CarInfo;