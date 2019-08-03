import React from 'react';
import Styles from '../../src/css/main.css';
import Search from './Search';
import NewPosition from './NewPosition';

const Main = () => {
  return (
    <main>
      <Search />
      <NewPosition />
    </main>
  )
}

export default Main;