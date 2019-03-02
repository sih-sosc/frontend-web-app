import React, { Component } from 'react';
import Styles from './styles.module.css';
import ProfileBadge from '../ProfileBadge';
class App extends Component {
  render() {
    return (
    <div className={Styles.NavBar}>
      <h2>AICTE Conveyer</h2>
      <ProfileBadge
          name="Administrator"
          bgColor="#fff"
          profileBgColor="#fff"
          textColor="#000"
          onClick={this.testClick}
        />
    </div>
    );
  }
}

export default App;
