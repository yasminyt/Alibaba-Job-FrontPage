import React from 'react';
import Styles from '../../src/css/main.css';

class HotText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const aContents = ['JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端'];

    const aLink = aContents.map((str, idx) => <a href='#' className={Styles.link} key={idx}>{str}</a>)

    return (
      <div className={Styles.hotText}>
        热门搜索：
        {aLink}
      </div>
    )
  }
}

export default HotText