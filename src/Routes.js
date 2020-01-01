import React from 'react';
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
  Navigation,
  Dashboard,
  AboutMe,
  Footer,
  CarInfo,
  CarDetail
} from './pages';
import styles from './css/App.module.css';
import './css/fontface.css';

const Routes = props => {
  const location = useLocation();
  const modalMatcher = useRouteMatch();
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
              <Route exact path="/car/:brand" render={props => <CarInfo />} />
              { modalMatcher && modalMatcher.isExact && <Route path="/car/:brand/:type" children={props => <CarDetail />} /> }
            </Switch>
          </animated.div>
        ))
      }
    </div>
  )
}

export default Routes;