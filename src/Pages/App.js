import React, { Component } from 'react';
import LoginPage from './Loginpage/LoginPage';
import Dashboard from '../Pages/Dashboard'
import './App.css';
import Register from './register'
import {ProtectedRoute} from './ProtectdRoute'
import history from './history';

import {Router, Route } from 'react-router-dom'
import Email from '../components/Dashboard/Email'
import NewEmail from '../components/Dashboard/Email/NewEmail'
class App extends Component {
  render() {
    return (
     <Router history={history} >
     
     <div>
     
        <Route path={"/"}  component={LoginPage} exact />
        <ProtectedRoute path={"/dashboard"}  component={Dashboard} exact/>
        <Route path={"/Register"}  component={Register} />
        <Route path={"/dashboard/Email"}  component={Email} />
        <Route path={"/dashboard/Email/NewEmail"}  component={NewEmail} />
        </div>
     </Router>
    )  
    }
}

export default App;
 