import React, { Component } from 'react';
import Logs from '../Content/Logs';
import LeftNav from '../LeftNav/';
import NavBar from '../Navbar';
import Styles from './Styles.module.css'


class Dashboard extends Component {
  render() {
    return (
      <div className={Styles.DashboardPage}>
        <NavBar></NavBar>
        <div className="container">
          <LeftNav></LeftNav>
          <Logs></Logs>
        </div>
      </div>
    );
  }
}


export default Dashboard;