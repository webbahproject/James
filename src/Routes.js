import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
  Navigation,
  Dashboard,
  AboutMe,
  Footer,
  CarInfo
} from './pages';
import styles from './css/App.module.css';
import './css/fontface.css';

const Routes = props => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <div className={styles.root}>
      {
         transitions.map( ({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Navigation />
            <Switch location={location}>
              <Route path="/" exact render={props => <Dashboard />} />
              <Route path="/aboutme" render={props => <AboutMe />} />
              <Route path="/car/proton" render={props => <CarInfo />} />
              <Route path="/car/perodua" render={props => <CarInfo />} />
            </Switch>
          </animated.div>
        ))
      }
    </div>
  )
}

export default Routes;