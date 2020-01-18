import React from 'react';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { ViewType } from './utils/Utils';
import './css/fontface.css';

/* Import routes to App */
import Routes from './Routes';

const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(255, 255, 255,0.8)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      outline: '1px solid slategrey'
    }
  }
});

const getMuiTheme = () => createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto'
    ].join(','),
    fontSize: ( ViewType.desktop || ViewType.tab ) && 15 || 11
  }
});

/* 
  This is the main file to aggregate all the templates 
  To wrap the element with another provider, wrap it in here
*/

function App() {
  return (
  	<MuiThemeProvider theme={getMuiTheme()}>
	    <BrowserRouter>
	      <Routes />
	    </BrowserRouter>
	  </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);