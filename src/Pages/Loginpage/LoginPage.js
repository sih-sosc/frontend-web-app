import React, { Component } from 'react';

import auth from '../../auth'
import history from '../history';
import './loginPage.css'

class LoginPage extends Component {
  state={
    todash:false,
  }
  

async onsubmit(){
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value; 
  
  const userdetails={
    email:email,
    password:password,
  };
  if( auth.login_check(userdetails))
  {
    history.push('/dashboard')
  }
  
} 
register(){
  history.push('/Register')
}



  render() {
   
  
    return (
      <div className="main" >
      
      <h1 >login</h1>
      <text>name</text>
      <input id="username"></input>
      <br/>
      <text>Password</text>
      <input id="password"></input>
      <br/>
      <button onClick={this.onsubmit}>submit</button>
      <button onClick={this.register}>register</button>
      
      </div>
    );
  }
}

export default LoginPage;
