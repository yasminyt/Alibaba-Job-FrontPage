import React from 'react';
import Styles from '../../css/main.css';
import SearchBar from './SearchBar';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={Styles.search}>
        <div className={Styles.layer}></div>
        <SearchBar />
      </section>
    )
  }
}

export default Search