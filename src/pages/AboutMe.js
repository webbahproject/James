import React from 'react';
import {
	Grid
} from '@material-ui/core';
import {
	Footer
} from '.';
import {
	ParagraphWithTitle,
	GridSpacer
} from './../components';
import styles from './../css/AboutMe.module.css';

const Body = props => {

	const AboutUs = {
		title: 'Tentang kami, MyCareta2U',
		content: [
			'MyCareta2u merupakan satu platform setempat yang diwujudkan oleh Penasihat Jualan dari pelbagai jenama kereta yang berada di pasaran. MyCareta2u bertindak sebagai admin dan bertujuan membantu Penasihat Jualan melengkapkan dokumen yang diperlukan serta menganalisa kelayakan pemohon sebelum diproses ke bank. Dengan sistem ini, pengurusan pinjaman kereta anda akan diproses dengan lebih cekap dan sistematik.',
			'Kelayakan seseorang adalah berbeza mengikut profil pemohon namun MyCareta2u akan mencuba sedaya upaya memberikan perkhidmatan yang terbaik kepada anda dan membantu merealisasikan impian anda.',
			'Kepuasan anda adalah kebanggaan kami…',
			'Ingat kereta, ingat MyCareta2u'
		]
	};

	return (
		<Grid container direction="row" className={styles.root}>
			<GridSpacer height="80" />
			<Grid item xs={12}>
				<ParagraphWithTitle text={AboutUs} />
			</Grid>
			<Footer />
		</Grid>
	)
}

export default Body;