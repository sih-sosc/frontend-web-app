import React, { Component } from "react";
import Styles from "./Styles.module.css";
class App extends Component {
  render() {
    return (
      <div className={Styles.Content}>
        <div className={Styles.ContentNav}>
          <ul>
            <div className={Styles.LeftContentNav}>
              <li>
                <a href="/">Logs</a>
              </li>
              <li>
                <a href="/">
                  Scheduled<div className={Styles.NumberCircle}>1</div>
                </a>
              </li>
            </div>
            <div className={Styles.RightContentNav}>
              <a href="/" className={Styles.NewCampaign}>
                New Campaign
              </a>
            </div>
          </ul>
        </div>
        <ul>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
          <a href="/" className={Styles.logHead}>
            Logs
          </a>
        </ul>
      </div>
    );
  }
}

export default App;
