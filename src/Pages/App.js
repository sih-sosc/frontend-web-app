import React, { Component } from 'react';
import LoginPage from './Loginpage';
import Dashboard from '../components/Dashboard'
import './App.css';
import Register from './register'
import {ProtectedRoute} from './ProtectdRoute'
import history from './history';

import {Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router history={history} >
     <div>
     
        <Route path={"/"}  component={LoginPage} exact />
        <Route path={"/dashboard"}  component={Dashboard} />
        <Route path={"/Register"}  component={Register} />
        </div>
     </Router>
    )  
    }
}

export default App;
 