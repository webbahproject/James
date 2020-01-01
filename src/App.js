import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App = props => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App;