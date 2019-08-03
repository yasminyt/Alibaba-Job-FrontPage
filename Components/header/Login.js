import React from 'react';
import styles from '../../src/css/header.css';

const Login = () => {
  return (
    <div className={styles.login}>
      欢迎来到阿里巴巴集团招聘！
      <a href='#' style={{"marginLeft": 5, "marginRight": 5 }}>登录</a>
      |  
      <a href="#" style={{"marginLeft": 5}}>注册</a>
    </div>
  )
};

export default Login;