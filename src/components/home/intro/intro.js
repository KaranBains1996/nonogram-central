import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './intro.module.scss';
import puzzleillus from '../../../assets/images/puzzle.svg';

const intro = () => (
  <div className={styles.ctn}>
    <h1 className={styles.heading}>Nonogram</h1>
    <p className={styles.p}>
      Nonograms, also known as Picross or Griddlers, are picture logic puzzles in which cells
      in a grid must be colored or left blank according to numbers at the side of the grid to
      reveal a hidden picture. In this puzzle type, the numbers are a form of discrete tomography
      that measures how many unbroken lines of filled-in squares there are in any given row or
      column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three
      filled squares, in that order, with at least one blank square between successive sets.
    </p>
    <img className={styles.illus} src={puzzleillus} alt="puzzle illustration" />
    <div className={styles['btn-ctn']}>
      <Button variant="contained" color="primary" className={styles.btn}>
        Get Started
      </Button>
    </div>
  </div>
);

export default intro;
