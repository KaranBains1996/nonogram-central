import React, { Component } from 'react';
import styles from './nonogram.module.scss';

class Nonogram extends Component {

  componentDidMount() {
    const ngram = window.nonogram;
    const confetti = window.confetti;
    new ngram.Game(
      [
        [2, 6],
        [2, 6],
        [2, 2],
        [2, 2],
        [10],
        [10],
        [2, 2],
        [2, 2],
        [6, 2],
        [6, 2],
      ],
      [
        [6, 2],
        [6, 2],
        [2, 2],
        [2, 2],
        [10],
        [10],
        [2, 2],
        [2, 2],
        [2, 6],
        [2, 6],
      ],
      'ngram',
      { 
        delay: 100,
        theme: {
          filledColor: '#26e064',
          meshColor: '#cce6d5',
          isMeshed: true,
          correctColor: '#118032',
          wrongColor: '#f00e0e',
        },
        onAnimationEnd() {
          confetti.start();
          setTimeout(() => {
            confetti.stop();
          }, 5000);
        }
      },
    );
  }

  render() {
    return (
        <canvas id="ngram" className={styles['ngram-canvas']}></canvas>
    );
  }
}

export default Nonogram;
