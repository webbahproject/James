import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
	Grid
} from '@material-ui/core';
import Slider from 'react-animated-slider-2';
import BackgroundSlider from 'react-background-slider';
import styles from './../css/Slider.module.css';
import 'react-animated-slider-2/build/horizontal.css';
import 'normalize.css/normalize.css';
import './../css/Slider.Animations.css';
import './../css/Slider.Styles.css';


const content = [
	{
		title: 'Proton, segak dan bergaya',
		description:
		'Canggih, elegan, anggun. Itulah ciri jenama kereta nasional Malaysia yang pertama, yang kini menjangkau lebih dari 30 tahun. Pilihlah kereta idaman anda, dari pelbagai rekabentuk dan ciri-ciri yang pastinya menepati kehendak setiap saiz pengguna. ',
		button: 'Ingin tahu lebih tentang kereta Proton?',
		link: '/car/proton',
		image: 'https://s2.paultan.org/image/2019/01/Proton-X70_Ext-2-630x420.jpg',
	}
];

const AnimatedSlider = props => {
	const history = useHistory();

	const goTo = url => {
		console.log('Can i see what is url ::: ', url);
		history.push(url);
	}

	return (
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="link-button" onClick={evt => goTo(history.push(item.link))}>{item.button}</button>
					</div>
					<div className="slider-footer">© 2019 Careta2u | Made by Webbah</div>
				</div>
			))}
		</Slider>
	)
}

export default AnimatedSlider;