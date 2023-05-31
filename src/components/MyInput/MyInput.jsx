import React from 'react';
import styles from './MyInput.module.scss';
const MyInput = (props) => {
  return <input className={styles.input}{...props}></input>;
};

export default MyInput;
