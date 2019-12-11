import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './navbar.module.scss';

import { loginAction, logoutAction } from '../../../actions/actions';

class Navbar extends Component {

  state = {
    navOpen: false
  }

  toggleNavHandler = () => {
    this.setState(prevState => ({ navOpen: !prevState.navOpen }));
  }

  closeNavHandler = () => {
    this.setState({ navOpen: false });
  }

  toggleAuthHandler = () => {
    if (this.props.isLoggedIn) {
      this.props.logoutAction();
    } else {
      this.props.loginAction();
    }
  }

  render() {
    let btnText;
    if (this.props.isLoggedIn) {
      btnText = 'Logout';
    } else {
      btnText = 'Login';
    }
    const navClasses = [styles['nav-links']];
    const burgerClasses = [styles.burger];
    if (this.state.navOpen) {
      navClasses.push(styles['nav-active']);
      burgerClasses.push(styles['burger-active']);
    }
    return (
      <nav>
        <div className={styles.logo}>
          <Link to="/" className={styles['no-decoration']}>
            <h4>Nonogram Builder</h4>
          </Link>
        </div>
        <button onClick={this.toggleAuthHandler} label="Login">{btnText}</button>
        <ul className={navClasses.join(' ')} onClick={this.closeNavHandler}>
          <li>
            <a href="/">Home</a>
            <Link to="/" className={styles['no-decoration']}></Link>
          </li>
          <li>
            <Link to="/" className={styles['no-decoration']}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/" className={styles['no-decoration']}>
              Contact
            </Link>
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginAction, logoutAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
