import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Modal, Typography, IconButton, Tooltip } from '@material-ui/core';
import { ChevronLeft, Close } from '@material-ui/icons';
import { CarsPricing, Form } from './../utils/Utils';
import { SimpleTable, VerticalSpacer, FormGenerator } from './../components';
import YouTube from 'react-youtube';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const styles = theme => ({
	paper: {
    position: 'absolute',
    width: windowWidth > 800 ? windowWidth * 0.65 : windowWidth * 0.9,
    height: windowHeight * 0.9,
    backgroundColor: '#141414',
    boxShadow: theme.shadows[5]
  },
  bold: {
  	fontWeight: 800
  },
  popheader: {
  	height: 'auto',
  	paddingTop: 20,
  	paddingBottom: 20
  },
  content: {
  	maxHeight: 400, 
  	overflowY: 'scroll',
  	paddingLeft: '7%',
  	paddingRight: '7%'
  },
  popcontent: {
  	height: 'auto',
  	paddingTop: 20,
  	paddingBottom: 40
  },
  description: {
  	color: 'rgba(255, 255, 255, 0.6)',
  	fontWeight: 200
  },
  popfooter: {
  	height: 'auto',
  	paddingTop: 10,
  	paddingBottom: 10,
  	backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  form: {
  	height: windowHeight * 0.9
  },
  intro: {
  	backgroundColor: 'rgba(255, 255, 255, 0.3)',
  	paddingTop: 15,
  	paddingBottom: 15,
  	paddingLeft: '7%',
  	paddingRight: '7%'
  },
  formreturn: {
  	paddingLeft: '7%',
  	paddingRight: '7%'
  },
  formcontent: {
  	maxHeight: windowHeight * 0.9 - 100,
  	overflow: 'hidden',
  	overflowY: 'scroll'
  },
  action: {
  	paddingRight: '7%'
  },
  footer: {
  	backgroundColor: 'rgba(255, 255, 255, 0.3)',
  	paddingTop: 5,
  	paddingBottom: 5,
  	paddingLeft: '7%',
  	paddingRight: '7%'
  },
  iconbtn: {
  	backgroundColor: 'rgba(255, 255, 255, 0.4)',
  	'&:hover': {
  		backgroundColor: 'rgba(255, 255, 255, 0.7)',
  	}
  },
  topright: {
  	position: 'absolute',
  	top: 10,
  	right: 10,
  	padding: 7
  }
});

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const opts = {
  width: windowWidth > 800 ? ( windowWidth * 0.65 ) - 100 : ( windowWidth * 0.9 ) - 40,
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

const InfoDisplay = props => {
	const { classes, car = {}, displaySetter, formSetter, typeSetter } = props;
  const { imgUrl = '', appender = '', title = '', description = [], youtube = '' } = car; 

	const tableheader = ['Model', 'Harga', 'Deposit (10%)', 'Loan (90%)', '5 tahun', '7 tahun', '9 tahun', 'Loan penuh', ''];

	const clickHandler = model => {
		// typeSetter(model);
		// displaySetter(true);
    let text = 'Hai MyCareta2u, saya berminat untuk mengetahui lebih lanjut tentang model kereta ' + model;
    let link = 'https://api.whatsapp.com/send?phone=60168263172&text=' + encodeURI(text);
    window.location.href = link;
	}

	return (
		<Grid container direction="row">
    	<Grid item xs={12}>
    		<div style={{ position: 'relative', backgroundImage: 'url(' + imgUrl + ')', backgroundSize: 'cover', height: 200, width: '100%' }}>
    			<IconButton className={` ${classes.iconbtn} ${classes.topright} `} onClick={formSetter}>
						<Tooltip title="Tutup popper">
							<Close style={{ fontSize: 12 }} />
						</Tooltip>
					</IconButton>
    		</div> 
    	</Grid>
    	<VerticalSpacer height="20" />
    	<Grid item xs={12} container className={classes.content}>
    		<Grid item xs={12} container alignItems="center" className={classes.popheader}>
      		<Typography variant="h5" className={classes.bold}>
      			{title}
      		</Typography>
      	</Grid>
      	<Grid item xs={12} container alignItems="center">
          {
            description.map( (text, idx) => (
              <Typography key={idx} component="p" variant="body2" className={classes.description} style={{ marginBottom: 15 }}>
                {text}
              </Typography>
            ))
          }
      	</Grid>
        {
          Boolean(youtube) &&
          <Grid item xs={12} container justify="center">
            <YouTube videoId={youtube} opts={opts} />
          </Grid>
        }
      	<Grid item xs={12} container justify="center" className={classes.popcontent}>
      		<SimpleTable config={{ tableheader, tablecontent: CarsPricing[appender], clickHandler }}  />
      	</Grid>
    	</Grid>
    </Grid>
	);
}

/* Custom hooks for handling form */
const useFormHandler = f => {
	const [form, setForm] = useState(f);

	const changeHandler = (key, v) => {
		setForm({ ...form, [key]: v });
	}

	return { form, changeHandler };
}

const FormDisplay = props => {
	const { classes, displaySetter, type } = props;
	const titles = Object.keys(Form);
	const Pemohon = useFormHandler(Form[titles[0]]);
	const Penjamin = useFormHandler(Form[titles[1]]);
	const Perujuk = useFormHandler(Form[titles[2]]);

	const description = 'Bagi membolehkan pihak Careta2u memeriksa kelayakan anda, sila isikan borang di bawah, dan Careta2u akan dengan secepatnya memproses permohonan anda dan memberitahu anda samada layak untuk memohon ataupun tidak.'

	/* Form submitter */
	const submit = () => {};

	/* Return handler */
	const returnToInfo = () => {
		displaySetter(false);
	}

	return (
		<Grid container direction="row" className={classes.form}>
			<Grid item xs={12} className={classes.intro}>
				<Typography variant="caption" align="justify">{description}</Typography>
			</Grid>
			<Grid item xs={12} container direction="row" className={classes.formcontent}>
				<VerticalSpacer height="25" />
				<Grid item xs={12} container direction="row" className={classes.formreturn}>
					<Grid item xs={1}>
						<IconButton className={classes.iconbtn} onClick={returnToInfo}>
							<Tooltip title="Kembali ke info">
								<ChevronLeft />
							</Tooltip>
						</IconButton>
					</Grid>
					<Grid item xs={6} style={{ paddingLeft: 15 }} container alignItems="center">
						<Typography variant="h5">
							{type}
						</Typography>
					</Grid>
				</Grid>
				<VerticalSpacer height="25" />
				<FormGenerator config={{ formTitle: titles[0], form: Pemohon.form, formSetter: Pemohon.changeHandler }} />
				<VerticalSpacer height="40" />
				<FormGenerator config={{ formTitle: titles[1], form: Penjamin.form, formSetter: Penjamin.changeHandler }} />
				<VerticalSpacer height="40" />
				<FormGenerator config={{ formTitle: titles[2], form: Perujuk.form, formSetter: Perujuk.changeHandler }} />
				<VerticalSpacer height="40" />
				<Grid item xs={12} container className={classes.action} alignItems="center" justify="flex-end">
					<Button variant="contained" color="primary" onClick={submit}>Hantar Kepada Careta2u!</Button>
				</Grid>
				<VerticalSpacer height="40" />
			</Grid>
			<Grid item xs={12} className={classes.footer} container justify="center">
				<Typography variant="caption">Careta2u</Typography>
			</Grid>
		</Grid>
	);
}

const CarDetail = props => {
	const { classes } = props;
  const [open, setOpen] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [type, setType] = useState('');
  const [modalStyle] = useState(getModalStyle);
  const isMatch = useRouteMatch('/car/:brand/:type');
  const history = useHistory();
  
  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  useEffect(() => {
  	setOpen(( isMatch && isMatch.isExact ) || false);
  }, [isMatch]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
    	<div style={modalStyle} className={classes.paper}>
	      { !isForm && <InfoDisplay {...props} formSetter={handleClose} displaySetter={setIsForm} typeSetter={setType} /> }
	      { isForm && <FormDisplay {...props} displaySetter={setIsForm} type={type} /> }
      </div>
    </Modal>
  );
}

export default withStyles(styles)(CarDetail);