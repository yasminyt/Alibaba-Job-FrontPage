import React from 'react';
import Styles from '../../css/main.css';
import NewPositionList from './NewPostionList';
import RightTab from './RightTab';

class NewPosition extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={Styles.newPosition}>
        <div className={Styles['newPosition-content']}>
          <NewPositionList />
          <RightTab />
        </div>
      </div>
    )
  }
}

export default NewPosition;