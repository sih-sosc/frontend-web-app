import React, { Component } from "react";
import Content from "../Content";
import LeftNav from "../LeftNav/";
import NavBar from "../Navbar";
import Styles from "./Styles.module.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className={Styles.DashboardPage}>
          <NavBar />
          <div className={Styles.ContentContainer}>
            <LeftNav />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
