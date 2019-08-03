import React, { Components } from 'react';
import styles from '../../src/css/header.css';
import Logo from './Logo';
import Nav from './Nav';
import Login from './Login';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <Logo />
        <Nav />
        <Login />
      </div>
    </header>
  )
}

export default Header;