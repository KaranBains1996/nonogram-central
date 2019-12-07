import React, { Component } from 'react';
import styles from './home.module.scss';

import Intro from './intro/intro';

class Home extends Component {
  render() {
    return (
      <div className={styles.ctn}>
        <div className={styles['text-content']}>
          <Intro />
        </div>
      </div>
    );
  }
}

export default Home;
