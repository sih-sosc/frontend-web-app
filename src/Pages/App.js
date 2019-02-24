import React, { Component } from 'react';
import LoginPage from './Loginpage/LoginPage';
import Dashboard from '../Pages/Dashboard'
import './App.css';

import history from './history';

import {Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router history={history} >
     <div>
     
        <Route path={"/"}  component={LoginPage} exact />
        <Route path={"/dashboard"}  component={Dashboard} />
        </div>
     </Router>
    )  
    }
}

export default App;
 