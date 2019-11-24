import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './layout.module.scss';

import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Tutorial from '../home/tutorial/tutorial';

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
      </Switch>
    </div>
  </Fragment>
);

export default layout;
