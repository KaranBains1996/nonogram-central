import React from 'react';
import { Link } from 'react-router-dom';

import styles from './tutorial.module.scss';

import Button from '../UI/button/button';

const tutorial = () => (
  <div className={styles.ctn}>
    <div className={styles.heading}>
      <h2>How to Solve Nonograms?</h2>
      <p className={styles.p}>
        <br/>
        To solve a puzzle, one needs to determine which cells will be boxes and
        which will be empty. Solvers often use a dot or a cross to mark cells they
        are certain are spaces. It's easier than you might think.
        <span role="img" aria-label="grinning-emoji">😁</span>
      </p>
    </div>
    <iframe className={styles.video} title="tutorial" src="https://www.youtube.com/embed/790hxqsI7Eg"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

    <div className={styles['btn-ctn']}>
      <Link to="/random" className={styles['no-decoration']}>
        <Button label="Try Solving" />
      </Link>
    </div>
  </div>
);

export default tutorial;
