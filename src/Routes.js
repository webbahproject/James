import React from 'react';
import _ from 'lodash';
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import {
  Navigation,
  Dashboard,
  AboutMe,
  CarInfo,
  CarDetail
} from './pages';
import styles from './css/App.module.css';
import './css/fontface.css';
import { Cars } from './utils/Utils';

const Routes = props => {
  const location = useLocation();
  const isMatch = useRouteMatch('/car/:brand/:type');
  let background = location.state && location.state.background;
  let car = ( isMatch && _.find(Cars[isMatch.params.brand], ['appender', isMatch.params.type]) ) || null;

  return (
    <div className={styles.root}>
      <Navigation />
      <Switch location={background || location}>
        <Route path="/" exact children={props => <Dashboard />} />
        <Route path="/aboutme" children={props => <AboutMe />} />
        <Route exact path="/car/:brand" children={props => <CarInfo />} />
      </Switch>
      { background && <Route path="/car/:brand/:type" children={props => <CarDetail car={car} />} /> }
    </div>
  )
}

export default Routes;