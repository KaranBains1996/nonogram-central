import React, { Component } from 'react';
import styles from './random.module.scss';

import Nonogram from '../UI/nonogram/nonogram';
import Button from '../UI/button/button';

class Random extends Component {
  render() {
    return (
      <div className={styles.ctn}>
        <h1 className={styles.heading}>
          Random Nonogram
        </h1>
        <Nonogram />
        <p>Tip: Cross out blocks which you think should not be filled.</p>
        <div className={styles['btn-ctn']}>
          <Button label="Randomize" />
        </div>
      </div>
    )
  }
}

export default Random;
