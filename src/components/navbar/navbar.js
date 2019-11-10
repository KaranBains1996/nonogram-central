import React, { Component } from 'react';
import styles from './navbar.module.scss';

class Navbar extends Component {

  state = {
    navOpen: false
  }

  toggleNavHandler = () => {
    this.setState(prevState => ({ navOpen: !prevState.navOpen }));
  }

  closeNavHandler = () => {
    this.setState({ navOpen: false});
  }

  render() {
    const navClasses = [styles['nav-links']];
    const burgerClasses = [styles.burger];
    if (this.state.navOpen) {
      navClasses.push(styles['nav-active']);
      burgerClasses.push(styles['burger-active']);
    }
    return (
      <nav>
        <div className={styles.logo}>
          <h4>Nonogram Builder</h4>
        </div>
        <ul className={navClasses.join(' ')} onClick={this.closeNavHandler}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className={burgerClasses.join(' ')} onClick={this.toggleNavHandler}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
