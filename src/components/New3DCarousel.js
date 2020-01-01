/* Imported out from 3D-react-carousel */

import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import isEqual from 'react-fast-compare';
import './../css/Simple3DCarousel.css';

const New3DCarousel = props => {
	const { slides : images } = props;
	const [state, setState] = useState({ slideTotal: 0, slideCurrent: -1, slides: [], height: '0px' });

	console.log('::::::::::::: Rerendering!!! ', state);

	const slideRight = () => {
		let {slideCurrent, slideTotal} = state;

		console.log('Let me see what is slideCurrent and slideTotal ::: ', slideCurrent, slideTotal);

		let preactiveSlide,proactiveSlide;
		if (slideCurrent < slideTotal) {
			slideCurrent++;
		} else {
			slideCurrent=0;
		}

		let slide = state.slides;
		if (slideCurrent > 0) {
			preactiveSlide = slide[slideCurrent - 1];
		} else {
			preactiveSlide = slide[slideTotal];
		}

		let activeSlide = slide[slideCurrent];
		if (slideCurrent < slideTotal) {
			proactiveSlide = slide[slideCurrent+1];
		} else {
			proactiveSlide = slide[0];
		}

		slide.forEach((slid,index)=> {
			if (slid.class.includes("preactivede") ) {
				slid.class ='slider-single proactivede';
			}
			if (slid.class.includes("preactive")) {
				slid.class = 'slider-single preactivede';
			}
		});

		preactiveSlide.class = 'slider-single preactive';
		activeSlide.class = 'slider-single active';
		proactiveSlide.class = 'slider-single proactive';

		console.log('What is slideCurrent ::: ', slideCurrent);
		console.log('What is slide ::: ', slide);

		setState({ ...state, slides: slide, slideCurrent });
		if(document.getElementsByClassName("slider-single active").length > 0) {
			setTimeout(()=> {
				let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
				setState({ ...state, height: height + 'px' });
			}, 500);
		}
	}
	
	const slideLeft = () => {
		let {slideCurrent, slideTotal} = state;

		let preactiveSlide , proactiveSlide;
		let slide = state.slides;
		if (slideCurrent > 0) {
			slideCurrent--;
		} else {
			slideCurrent = slideTotal;
		}

		if (slideCurrent < slideTotal) {
			proactiveSlide = slide[slideCurrent + 1];
		} else {
			proactiveSlide = slide[0];
		}
		var activeSlide = slide[slideCurrent];
		if (slideCurrent > 0) {
			preactiveSlide = slide[slideCurrent - 1];
		} else {
			preactiveSlide = slide[slideTotal];
		}
		slide.forEach((slid,index)=> {
			if (slid.class.includes("proactivede") ) {
				slid.class ='slider-single preactivede';
			}
			if (slid.class.includes("proactive")) {
				slid.class = 'slider-single proactivede';
			}
		});

		preactiveSlide.class ='slider-single preactive';
		activeSlide.class = 'slider-single active';
		proactiveSlide.class = 'slider-single proactive';
		setState({ ...state, slides: slide, slideCurrent });
		if(document.getElementsByClassName("slider-single active").length > 0) {
			setTimeout(() => {
				let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
				setState({ ...state, height: height + 'px' });
			}, 500);
		}
	}

	useEffect(() => {
		const pushSlides = addSlideCurrent => {
			let slides = [];
			images.forEach(slide => {
				let slideobject = {
					class:"slider-single proactivede",
					element:slide
				}
				slides.push(slideobject);
			});

			setState({ ...state, slides, slideTotal: images.length-1, ...( Boolean(addSlideCurrent) && { slideCurrent : -1 } ) });
		}

		if (!Boolean(state.slides.length)){
			pushSlides();
		}

		if (Boolean(state.slides.length)){
			if (!isEqual(images[0], state.slides[0])){
				pushSlides(true);
				setTimeout(() => {
					slideRight();
					setState({ ...state, height: document.getElementsByClassName("slider-single")[0].clientHeight + 'px' });
				}, 500);
			}
		}
	}, [state]);

	return (
		<Grid item xs={12} container>
			<div className="react-3d-carousel" style={{ height: state.height}}>
				{state.slides && state.slides.length > 0 &&
					<div className="slider-container">
						<div className="slider-content">
							{state.slides.map((slider,index)=>{
								return (
									<div className={slider.class} key={index}>
										<div className="slider-left" onClick={slideLeft}>
											<div>
												<KeyboardArrowLeft />
											</div>
										</div>
										<div className="slider-right" onClick={slideRight}>
											<div >
												<KeyboardArrowRight />
											</div>
										</div>

										<div className="slider-single-content">
											{slider.element}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				}
			</div>
		</Grid>
	);
}

export default New3DCarousel;