import React, { Component } from 'react';

import auth from '../../auth'
import history from '../history';
import styles from './loginPage.module.css'

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
    this.onsubmit = this.onsubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

  }


  handleEmail = function(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword = function(event) {
    this.setState({
      password: event.target.value
    })
  }

 onsubmit = async function() {
    
    const userdetails={
      email: this.state.email,
      password: this.state.password,
    };

    console.log(userdetails);

    if( auth.login_check(userdetails))
    {
      history.push('/dashboard')
    }
  }


  render() {
  
    return (

      <div className={styles.loginPage} >
        <div className={styles.card}>
          <h1 >Sign In</h1>
          <input type="text" 
            id="username" 
            value={this.state.email}
            onChange={this.handleEmail} 
            placeholder="example@email.com"></input>
          <br/>
          <input type="password" 
            id="password" 
            value={this.state.password} 
            onChange={this.handlePassword}
            placeholder="Password"></input>
          <br/>
          <button className={styles.login} onClick={this.onsubmit}>SIGN IN</button>
        </div>      

     
      </div>
    );
  }
}

export default LoginPage;
