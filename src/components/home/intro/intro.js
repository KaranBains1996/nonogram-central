import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import styles from './intro.module.scss';
import puzzleillus from '../../../assets/images/nonogram.gif';

class Intro extends Component {

  state = {
    learnMore: false,
    content: `Nonograms, also known as Picross or Griddlers, are picture logic puzzles in which cells
      in a grid must be colored or left blank according to numbers at the side of the grid to
      reveal a hidden picture. `,
    extraContent: `In this puzzle type, the numbers are a form of discrete tomography
      that measures how many unbroken lines of filled-in squares there are in any given row or
      column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three
      filled squares, in that order, with at least one blank square between successive sets.`
  };

  showMoreHandler = () => {
    this.setState({ learnMore: true });
  };

  showLessHandler = () => {
    this.setState({ learnMore: false });
  };

  render() {
    const moreEl = (<button className={styles.toggleBtn} onClick={this.showMoreHandler}>Show more</button>);
    const lessEl = (<button className={styles.toggleBtn} onClick={this.showLessHandler}>Show less</button>);
    let toggleDataBtn = null;
    let extraData = "";
    if (this.state.learnMore) {
      toggleDataBtn = lessEl;
      extraData = this.state.extraContent;
    } else {
      toggleDataBtn = moreEl;
    }
    return (
      <div className={styles.ctn}>
        <h1 className={styles.heading}>Nonogram</h1>
        <p className={styles.p}>
          {this.state.content} {extraData} {toggleDataBtn}
        </p>

        <img className={styles.illus} src={puzzleillus} alt="puzzle illustration" />
        <div className={styles['btn-ctn']}>
          <Button variant="contained" color="primary" className={styles.btn}>
            Get Started
          </Button>
          <Link to="/tutorial" className={styles['no-decoration']}>
            <Button variant="contained" color="primary" className={styles.btn}>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
