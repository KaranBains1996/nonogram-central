import React from 'react';
import styles from './home.module.scss';

import Intro from './intro/intro';
import Tutorial from './tutorial/tutorial';

const home = () => (
    <div className={styles.ctn}>
      <div className={styles['text-content']}>
        <Intro />
      </div>
      <div className={styles['video-content']}>
        <Tutorial />
      </div>
    </div>
);

export default home;
