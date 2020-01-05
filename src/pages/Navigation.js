import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { 
	AppBar,
	Toolbar,
	Button
} from '@material-ui/core';
import styles from './../css/Navigation.module.css';

const Navigation = props => {
	const history = useHistory();
	const location = useLocation();

	return (
		<div className={styles.root}>
			<AppBar position="fixed" className={styles.header}>
			  <Toolbar variant="dense">
			  	<div className={styles.title}>
			    	<img alt="" title="Careta2u" src="/images/careta2u_white.png" width="100" height="70" onClick={() => history.push('/')} />
			    </div>
			    <Button color="inherit" className={` ${styles.menu} ${ location.pathname === '/car/proton' && styles.active } `} onClick={() => history.push('/car/proton')}>PROTON</Button>
			    <Button color="inherit" className={` ${styles.menu} ${ location.pathname === '/aboutme' && styles.active } `} onClick={() => history.push('/aboutme')}>TENTANG SAYA</Button>
			  </Toolbar>
			</AppBar>
		</div>
	)
}

export default Navigation;