import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './layout.module.scss';

import Navbar from '../navbar/navbar';
import Home from '../home/home';

const layout = () => (
  <Fragment>
    <Navbar />
    <div className={styles.ctn}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Fragment>
);

export default layout;
