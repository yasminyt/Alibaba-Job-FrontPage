import React from 'react';
import Styles from '../../css/main.css';

class Li extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={Styles.scroll}>
        <a href="#" className={Styles.position}>{this.props.title}</a>
        <em className={Styles.city}>{this.props.city}</em>
        <em className={Styles.time}>{this.props.time}</em>
      </li>
    )
  }
}

export default Li;