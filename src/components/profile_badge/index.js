import React, { Component } from "react";
import Styles from "./styles.module.css";

{
  /* <ProfileBadge
          name="Administrator"
          bgColor="#fff"
          profileBgColor="#fff"
          textColor="#000"
          onClick={this.testClick}
        /> */
}

const ProfileBadge = props => (
  <div
    onClick={props.onClick}
    className={Styles.container}
    style={{ backgroundColor: props.bgColor }}
  >
    <div
      className={Styles.profileAvatar}
      style={{
        width: props.avatarWidth,
        height: props.avatarHeight,
        backgroundColor: props.profileBgColor
      }}
    />
    <div className={Styles.profileName} style={{ color: props.textColor }}>
      {props.name}
    </div>
  </div>
);

export default ProfileBadge;
