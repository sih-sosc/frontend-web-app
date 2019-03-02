import React, { Component } from "react";
import Styles from "./Styles.module.css";
import ProfileBadge from "../profile_badge";
class App extends Component {
  testClick() {
    console.log("Clicked!");
  }
  render() {
    return (
      <div className={Styles.NavBar}>
        <h2>AICTE Conveyor</h2>
        {/* <div className={Styles.MyProfile}>
          <div className={Styles.ProfilePic} />
          <a className={Styles.MyName} href="home.asp">
            MyName
          </a>
        </div> */}
      </div>
    );
  }
}

export default App;
