import React, { Component } from "react";
import Styles from "./styles.module.css";
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from "react-router-dom";

class LeftNav extends Component {
  render() {
    return (
      <div className={Styles.leftNav}>
        <ul>
          <li>Dashboard</li>
          <li>E-mail</li>
          <li>SMS</li>
          <li>Contact List</li>
          <li>Services</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
