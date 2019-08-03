import React from 'react';
import styles from '../../css/header.css';

const Logo = () => {
  return (
    <div>
      <a href='#' className={styles.logo}>
        <img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' style={{"height": 20}}></img>
      </a>
      <i className={styles.title} style={{"margin": "0 10px", "fontSize": 20}}>|</i>
      <i className={styles.title} style={{"lineHeight": "54px"}}>社招官网</i>
    </div>
  )
}

export default Logo;