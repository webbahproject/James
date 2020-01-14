import React, { useState, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { 
	AppBar, Toolbar, Button, Menu, MenuItem
} from '@material-ui/core';
import styling from './../css/Navigation.module.css';

const menuStyles = theme => ({
	menu: {
		paddingTop: 0,
		paddingBottom: 0,
		width: 150
	}
});

const CarMenu = [
	{ brand: 'Proton', url: '/car/proton' }
];

const Menus = withStyles(menuStyles)(props => {
	const { classes, open, openSetter } = props;
	const history = useHistory();

	const handleClose = useCallback(() => openSetter(null));

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
			{ CarMenu.map( car => 
				<MenuItem key={car.brand} className={classes.menu} onClick={() => goTo(car.url)}>
					{ car.brand }
				</MenuItem> 
			)}
		</Menu>
	);
});

const Navigation = props => {
	const history = useHistory();
	const location = useLocation();
	const [menu, setMenu] = useState(null);

	return (
		<div className={styling.root}>
			<AppBar position="fixed" className={styling.header}>
			  <Toolbar variant="dense">
			  	<div className={styling.area}>
			    	<img alt="" title="Careta2u" src="/images/MyCareta2U_Logo.png" width="120" height="auto" onClick={() => history.push('/')} />
			    </div>
			    <Button color="inherit" className={` ${styling.menu} ${ location.pathname === '/car/proton' && styling.active } `} onClick={evt => setMenu(evt.currentTarget)}>SENARAI KERETA</Button>
			    <Button color="inherit" className={` ${styling.menu} ${ location.pathname === '/aboutme' && styling.active } `} onClick={() => history.push('/aboutme')}>TENTANG KAMI</Button>
			    <Menus open={menu} openSetter={setMenu} />
			  </Toolbar>
			</AppBar>
		</div>
	)
}

export default Navigation;