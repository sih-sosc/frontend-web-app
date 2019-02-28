import React, { Component } from 'react';

import auth from '../../auth'
import history from '../history';
import './loginPage.css'

class LoginPage extends Component {
  state={
    todash:false,
  }
  

 onsubmit(){
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value; 
  
  const userdetails={
    email:email,
    password:password,
  };
   auth.login_check(userdetails);
 
  
} 
register(){
  history.push('/Register')
}



  render() {
   
  
    return (
      <div className="main" >
      
      <h1 >login</h1>
      name
      <input id="username"></input>
      <br/>
      Password
      <input id="password"></input>
      <br/>
      <button onClick={this.onsubmit}>submit</button>
      <button onClick={this.register}>register</button>
      
      </div>
    );
  }
}

export default LoginPage;
