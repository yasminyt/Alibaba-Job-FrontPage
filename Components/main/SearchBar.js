import React from 'react';
import Styles from '../../src/css/main.css';
import SearchBox from './SearchBox';
import HotText from './HotText';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pContents = ['If not now, when?', 'If not me, who?', '此时此刻，非我莫属！'];
    const pList = pContents.map((str, index) => {
      if (index < 2)
        return <p className={Styles.title} key={index}>{str}</p>;
      else
        return <p className={Styles.title} style={{ "fontSize": 30, 'lineHeight': '36px', 'fontWeight': 'lighter', 'marginBottom': 38 }} key={index}>{str}</p>
    });
    return (
      <div className={Styles.searchBar}>
        <form>
          <div className={Styles.content}>
            {pList}
            <SearchBox />
            <HotText />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;