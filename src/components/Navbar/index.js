import React, { Component } from 'react';
import Styles from './Styles.module.css'
class App extends Component {
  render() {
    return (
    <div className={Styles.NavBar}>
      <h2>AICTE Conveyor</h2>
      <div className={Styles.MyProfile}>
        <div className={Styles.ProfilePic}></div>
        <a  className={Styles.MyName} href="home.asp">MyName</a>
      </div>
    </div>
    );
  }
}

export default App;
