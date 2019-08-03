import React, { Components } from 'react';
import styles from '../../src/css/header.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currLi: 0,
      title: ['首页', '社会招聘', '校园招聘', '了解阿里', '个人中心']
    };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(e) {
    const index = this.state.title.indexOf(e.target.innerText);
    this.setState({
      currLi: index
    });
  }

  render() {
    const title = this.state.title;
  
    const lis = title.map((str, index) => {
      if (this.state.currLi == index)
        return <li className={styles.li} key={index}><a href='#' className={styles.link} style={{'color': '#F37327'}}>{str}</a></li>
      else
        return <li className={styles.li} key={index}><a href='#' className={styles.link}>{str}</a></li>
    });
  
    return (
      <nav>
        <ul className={styles.ul} onClick={this.setCurrent}>{lis}</ul>
      </nav>
    )
  }

}

export default Nav;