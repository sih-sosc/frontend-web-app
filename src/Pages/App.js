import React, { Component } from 'react';
import LoginPage from './Loginpage';
import Dashboard from '../components/Dashboard'
import './App.css';
import Register from './register'
import {ProtectedRoute} from './ProtectdRoute'
import history from './history';

import {Router, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faEnvelopeOpen, faSms, faUsers, faPuzzlePiece, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faChartLine)
library.add(faEnvelopeOpen)
library.add(faSms)
library.add(faUsers)
library.add(faPuzzlePiece)
library.add(faPlusCircle)

class App extends Component {
  render() {
    return (
     <Router history={history} >
     <div className="mainContainer">
     
        <Route path={"/"}  component={LoginPage} exact />
        <Route path={"/dashboard"}  component={Dashboard} />
        <Route path={"/Register"}  component={Register} />
        </div>
     </Router>
    )  
    }
}

export default App;
 