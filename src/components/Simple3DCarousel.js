/* Imported out from 3D-react-carousel */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import isEqual from 'react-fast-compare';
import './../css/Simple3DCarousel.css';

class Simple3DCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			slideTotal:0,
			slideCurrent : -1,
			slides:[],
			height:"0px"
		}
	}

	componentDidMount(){
		let slides = [];
		this.props.slides.forEach(slide => {			
			let slideobject = {
				class:"slider-single proactivede",
				obj: slide
			}
			slides.push(slideobject);
		});

		this.setState((prevState, props) => {
		  return {  slides,
			slideTotal:this.props.slides.length-1}

		});

		if(this.state.slideCurrent === -1)
		
		setTimeout(()=> {
			this.slideRight();
			this.setState((prevState, props) => {
			  return { 
			  	...this.state, 
					height: document.getElementsByClassName("slider-single")[0].clientHeight + 'px'
			}});
		}, 500);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
	  if(prevProps.slides && prevProps.slides[0] && this.props.slides[0]){
		if(!isEqual(prevProps.slides[0], this.props.slides[0])){
		  let slides = [];
		  this.props.slides.forEach((slide) => {
			  let slideobject = {
				  class:"slider-single proactivede",
				  obj: slide
			  }
			  slides.push(slideobject);
		  });
		  this.setState((prevState, props) => {
			  return {
				slides,
			  slideTotal:this.props.slides.length-1,
			  slideCurrent : -1}
		  });
		  this.setState((prevState, props) => {
			  return {...prevState}
		  });
		  setTimeout(()=> {
			  this.slideRight();

			  // console.log('Let me check in here inside componentDidUpdate :: ', document.getElementsByClassName("slider-single")[0].clientHeight + 'px');

			  this.setState((prevState, props) => {
				  return { 
				  	...this.state, 
						height: document.getElementsByClassName("slider-single")[0].clientHeight + 'px'
				}});
			  // height && document.getElementsByClassName("slider-single")[0].clientHeight;
		  }, 500);
		}
	  }
	}

	slideRight = () => {
		let {slideCurrent,slideTotal} = this.state;
		let preactiveSlide,proactiveSlide;
		if (slideCurrent < slideTotal) {
			slideCurrent++;
		} else {
			slideCurrent=0;
		}
		let slide = this.state.slides;
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

			slid.element = <img key={slid.obj.title} alt={slid.obj.title} src={slid.obj.imgUrl} title={slid.obj.title} />
		});

		preactiveSlide.class = 'slider-single preactive';
		activeSlide.class = 'slider-single active';
		proactiveSlide.class = 'slider-single proactive';

		// Make only active slide clickable
		activeSlide.element = (
			<Link key={activeSlide.obj.title} to={{ pathname: '/car/' + activeSlide.obj.brand + '/' + activeSlide.obj.appender, state: { background: this.props.path } }}>
				<img alt={activeSlide.obj.title} src={activeSlide.obj.imgUrl} title={activeSlide.obj.title} />
			</Link>
		);

		this.setState((prevState, props) => {
		  return { slides : slide, slideCurrent}
		});
		if(document.getElementsByClassName("slider-single active").length > 0) {
			setTimeout(()=> {
				let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
				this.setState((prevState, props) =>{
					return {
						...this.state,
						height:height+"px"
					}
				})
			}, 500);
		}
	}
	
	slideLeft = () => {
		let {slideCurrent,slideTotal} = this.state;
		let preactiveSlide,proactiveSlide;
		let slide = this.state.slides;
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
			if (slid.class.includes("preactivede") ) {
				slid.class ='slider-single preactivede';
			}

			if (slid.class.includes("proactive")) {
				slid.class = 'slider-single proactivede';
			}

			slid.element = <img key={slid.obj.title} alt={slid.obj.title} src={slid.obj.imgUrl} title={slid.obj.title} />
		});

		preactiveSlide.class ='slider-single preactive';
		activeSlide.class = 'slider-single active';
		proactiveSlide.class = 'slider-single proactive';

		// Make only active slide clickable
		activeSlide.element = (
			<Link key={activeSlide.obj.title} to={{ pathname: '/car/' + activeSlide.obj.brand + '/' + activeSlide.obj.appender, state: { background: this.props.path } }}>
				<img alt={activeSlide.obj.title} src={activeSlide.obj.imgUrl} title={activeSlide.obj.title} />
			</Link>
		);

		this.setState((prevState, props) => {
		  return {slides:slide,slideCurrent}
		});
		if(document.getElementsByClassName("slider-single active").length > 0) {
			setTimeout(()=> {
				let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
				this.setState((prevState, props) =>{
					return {
						...this.state, 
						height: height+"px"
					}
				})
			}, 500);
		}
	}

	goToDetails = key => {
		this.props.history.push(this.props.path + '/' + key);
	}

	render() {
		return (
			<Grid item xs={12} container>
				<div className="react-3d-carousel" style={{ height:this.state.height}}>
					{this.state.slides && this.state.slides.length > 0 &&
						<div className="slider-container">
							<div className="slider-content">
								{this.state.slides.map((slider,index)=> (
									<div className={slider.class} key={index}>
										<div className="slider-left" onClick={this.slideLeft}>
											<div>
												<KeyboardArrowLeft />
											</div>
										</div>
										<div className="slider-right" onClick={this.slideRight}>
											<div >
												<KeyboardArrowRight />
											</div>
										</div>

										<div className="slider-single-content">
											{slider.element}
										</div>
									</div>
								))}
							</div>
						</div>
					}
				</div>
			</Grid>
		);
	}
}

Simple3DCarousel.propTypes = {
	slides: PropTypes.arrayOf(PropTypes.element)
};

export default Simple3DCarousel;