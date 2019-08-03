import React from 'react';
import Styles from '../../css/main.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Styles.searchBox}>
        <div className={Styles.layer2}></div>
        <input placeholder='请输入职位关键词' className={Styles.searchText}></input>
        <input className={Styles.searchBtn} type="submit" value="搜索"></input>
      </div>
    )
  }
}

export default SearchBox;