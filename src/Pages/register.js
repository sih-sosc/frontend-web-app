import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        name
        <input id="name" />
        <br />
        Email
        <input id="email" type="mail" />
        <br />
        Phone number
        <input id="pno" />
        <br />
        Password
        <input id="pass" type="password" />
        <br />
        <button>Register</button>
      </div>
    );
  }
}

export default Register;
