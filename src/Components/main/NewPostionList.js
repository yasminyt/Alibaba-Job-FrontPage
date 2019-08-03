import React from 'react';
import Styles from '../../css/main.css';
import PositionList from './PositionList';

class NewPositionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Styles['newPosition-list']}>
        <div className={Styles.morePosition}>
        最新职位
        <a href='#' className={Styles.clickMorePosition}>更多</a>
        </div>
        <PositionList />
      </div>
    )
  }
}

export default NewPositionList;