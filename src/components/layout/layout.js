import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './layout.module.scss';

import Navbar from '../UI/navbar/navbar';
import Home from '../home/home';
import Tutorial from '../tutorial/tutorial';
import Random from '../random/random';

const layout = () => (
  <Fragment>
    <Navbar />
    <div className={styles.ctn}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
      </Switch>
    </div>
  </Fragment>
);

export default layout;
