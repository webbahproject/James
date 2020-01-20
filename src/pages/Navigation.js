import React, { useState, Fragment, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { 
	AppBar, Toolbar, Button, Menu, MenuItem, IconButton, Divider, ListItemIcon
} from '@material-ui/core';
import { Dehaze } from '@material-ui/icons';
import { ViewType, CarLogos } from './../utils/Utils';
import styling from './../css/Navigation.module.css';

const menuStyles = theme => ({
	menu: {
		paddingTop: 0,
		paddingBottom: 0,
		width: (( ViewType.desktop || ViewType.tab ) && 200) || 150,
		minHeight: (( ViewType.mobile || ViewType.smallmobile ) && 30) || 35
	},
	burger: {
		color: '#FFD800'
	}
});

const CarMenu = [
	{ brand: 'Proton', url: '/car/proton' }
];

const Menus = withStyles(menuStyles)(props => {
	const { classes, open, openSetter } = props;
	const history = useHistory();
	const handleClose = () => openSetter(null);

	const goTo = path => {
		history.push(path);
		handleClose();
	}

	return (
		<Menu
			getContentAnchorEl={null}
			anchorEl={open}
			open={Boolean(open)}
			onClose={handleClose}
			anchorOrigin={{
	      vertical: 'bottom',
	      horizontal: 'center',
	    }}
	    transformOrigin={{
	      vertical: 'top',
	      horizontal: 'center',
	    }}
		>
			{ 
				( ViewType.desktop || ViewType.tab ) && 
				CarMenu.map( car => 
				<MenuItem key={car.brand} className={classes.menu} onClick={() => goTo(car.url)}>
					<ListItemIcon>
	          <img alt="" src={CarLogos[(car.brand).toLowerCase()]} width="40" height="auto" />
	        </ListItemIcon>
					{ car.brand }
				</MenuItem> 
			)}
			{ 
				( ViewType.mobile || ViewType.smallmobile ) && 
				[
					CarMenu.map( car => 
							<MenuItem key={car.brand} className={classes.menu} onClick={() => goTo(car.url)}>
								<ListItemIcon>
			            <img alt="" src={CarLogos[(car.brand).toLowerCase()]} width="30" height="auto" />
			          </ListItemIcon>
								{ car.brand }
							</MenuItem>
					),
					<Divider key="divider" />,
					<MenuItem key='tentang_kami' className={classes.menu} onClick={() => goTo('/aboutme')}>
						{ 'Tentang Kami' }
					</MenuItem>
				]
			}
		</Menu>
	);
});

const mainStyles = theme => ({
	headertransparent: {
		backgroundColor: 'transparent',
		boxShadow: 'none'
	}, 
	headerbg: {
		backgroundColor: '#141414',
		boxShadow: 'none'
	},
	pad: {
		padding: '10px 0 10px 20px'
	},
	area: {
		flexGrow: 1,
		cursor: 'pointer',
	},
	rightjustify: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	burger: {
		color: '#FFD800',
		cursor: 'pointer'
	}
});

const Navigation = props => {
	const { classes } = props;
	const history = useHistory();
	const location = useLocation();
	const [menu, setMenu] = useState(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
    const onScroll = () => {
      setShow( window.scrollY > 100 ? true : false );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    
  }, []);

	return (
		<div className={styling.root}>
			<AppBar position="fixed" className={show ? classes.headerbg : classes.headertransparent}>
			  <Toolbar variant="dense" className={classes.pad}>
			  	<div className={classes.area}>
			    	<img 
			    		alt="" 
			    		title="Careta2u" 
			    		src="/images/MyCareta2U_Logo.png" 
			    		width={ (( ViewType.desktop || ViewType.tab ) && 120) || 90 } 
			    		height="auto" 
			    		onClick={() => history.push('/')} 
			    />
			    </div>
			    {
			    	( ViewType.desktop || ViewType.tab ) &&
			    	<Fragment>
				    	<Button color="inherit" className={` ${styling.menu} ${ location.pathname === '/car/proton' && styling.active } `} onClick={evt => setMenu(evt.currentTarget)}>SENARAI KERETA</Button>
					    <Button color="inherit" className={` ${styling.menu} ${ location.pathname === '/aboutme' && styling.active } `} onClick={() => history.push('/aboutme')}>TENTANG KAMI</Button>
					    <Menus open={menu} openSetter={setMenu} />
			    	</Fragment>
			    }
			    {
			    	( ViewType.mobile || ViewType.smallmobile ) &&
			    	<div className={`${classes.area} ${classes.rightjustify}`}>
			    		<IconButton className={classes.burger} onClick={evt => setMenu(evt.currentTarget)}>
			    			<Dehaze />
			    		</IconButton>
			    		<Menus open={menu} openSetter={setMenu} />
			    	</div>
			    }
			  </Toolbar>
			</AppBar>
		</div>
	)
}

export default withStyles(mainStyles)(Navigation);