import React from 'react';
import Styles from '../../css/main.css';

const RightTab = () => {
  const img = ['https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png', 'https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'],
        width = [179, 260];

  const aTags = img.map((src, index) => {
    return (
      <a href="#" className={Styles['show-pic']} style={{"marginBottom": index ? 0 : 20}} key={index}>
        <img src={src} style={{"width": width[index], "verticalAlign": 'middle'}}></img>
      </a>
    )
  });

  return (
    <div style={{"width": '28%', "float": 'right'}}>
      {aTags}
    </div>
  )
}

export default RightTab;

