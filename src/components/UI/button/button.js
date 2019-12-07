import React from 'react';
import styles from './button.module.scss';
import MatButton from '@material-ui/core/Button';

const button = (props) => {
  let style;
  if (props.type === 'red') {
    style = styles['red-btn'];
  } else {
    style = styles.btn
  }
  return (
    <MatButton variant="contained" color="primary" className={style}>
      { props.label }
    </MatButton>
  );
}

export default button;
