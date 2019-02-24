import React, { Component } from 'react';
import axios from 'axios'
import history from '../history';
import './loginPage.css'

class LoginPage extends Component {
  state={
    todash:false,
  }
redirect(){
  
}
onsubmit(){
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const userdetails={
    email:email,
    password:password,
  }
  //QUERY CHECKING
axios.post('BACKEND_API_HERE',userdetails)
 .then((resp)=>{
   console.log(resp)
   if(resp.status===200)
   {
     console.log("hrer");
    history.push('/dashboard')
    
  
   }
 })
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
      
      </div>
    );
  }
}

export default LoginPage;
