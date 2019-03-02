import React, { Component } from 'react';
import Content from '../Content';
import LeftNav from '../LeftNav/';
import NavBar from '../Navbar';
import Styles from './Styles.module.css'

class Dashboard extends Component {
  render() {
    return (
      <div className={Styles.DashboardPage}>
        <NavBar></NavBar>
        <div className={Styles.ContentContainer}>
          <LeftNav></LeftNav>
          <Content></Content>
        </div>
      </div>
    );
  }
}


export default Dashboard;