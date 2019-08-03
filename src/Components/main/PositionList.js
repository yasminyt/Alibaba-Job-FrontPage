import React from 'react';
import ReactDOM from 'react-dom';
import Styles from '../../css/main.css';
import Li from './Li';

class PositionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ul1 = document.querySelector('#list1'),
          ul2 = document.querySelector('#list2'),
          container = document.querySelector('#container');

    ul2.innerHTML = ul1.innerHTML;
    container.scrollTop = 0;
    
    let timer = setInterval(this.componentDidUpdate, 50);

    container.onmouseover = () => clearInterval(timer);

    container.onmouseout = () => timer = setInterval(this.componentDidUpdate, 50);
    
  }

  componentDidUpdate() {
    const ul1 = document.querySelector('#list1'),
          container = document.querySelector('#container');
    
    if (container.scrollTop >= ul1.scrollHeight)
      container.scrollTop = 0;
    else
      container.scrollTop++;
  }

  render() {
    const data = [
      { title: '研发工程师-地图数据质量', city: '北京', time: '12小时前' },
      { title: '阿里集团-资深数据分析师', city: '北京', time: '12小时前' },
      { title: '网商银行-国际结算专家', city: '杭州', time: '20小时前' },
      { title: '商家及B类体验-业务运营专家-天猫商家营商环境', city: '杭州', time: '23小时前' },
      { title: '研发工程师-地图数据质量', city: '北京', time: '12小时前' },
      { title: '阿里影业-新媒体运营-北京', city: '北京', time: '2小时前' },
      { title: '蚂蚁金服-设施设备管理专家', city: '杭州', time: '3小时前' },
      { title: '口碑-业务运营专家（政策&结算）-餐饮服务', city: '杭州', time: '8小时前' },
      { title: '本地生活-高级测试开发工程师/测试开发专家', city: '杭州，上海', time: '10小时前' },
      { title: '研发工程师-地图数据质量', city: '北京', time: '12小时前' },
      { title: '口碑-中台产品运营-业务管理部', city: '杭州', time: '12小时前' },
    ];
  
    const lis = data.map(obj => {
      return <Li title={obj.title} city={obj.city} time={obj.time} />
    })
  
    return (
      <div id='container' className={Styles.positionList}>
        <ul id='list1' style={{"marginTop": 0, "marginBottom": 0}}>
          {lis}
        </ul>
        <ul id='list2' style={{"marginTop": 0, "marginBottom": 0}}></ul>
      </div>
    )
  }
}

export default PositionList;
