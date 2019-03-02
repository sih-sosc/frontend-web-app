import React, { Component } from 'react';
import Styles from './Styles.module.css'
class LeftNav extends Component {
  render() {
    return (
    <div className={Styles.LeftNav}>
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
