import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
    <div className="Logs">
        <ul>
        <div>
        <li><a href="/">Logs</a></li>
        <li><a href="/">Scheduled<div className="NumberCircle">1</div></a></li>
        <a href="/" className="NewCampaign">New Campaign</a>
        </div>
        </ul> 
        <ul>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a>
      <a href="/" className="logHead">Logs</a> 
        </ul>
    </div>
    );
  }
}

export default App;
