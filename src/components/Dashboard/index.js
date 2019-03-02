import React, { Component } from 'react';
import NavBar from '../Navbar';
import Styles from './styles.module.css'
import ShowArea from '../ShowArea'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dashboard extends Component {

  
  constructor(props) {
    super(props);

   
    this.items = ["Dashboard", "Emails", "SMS", "Contacts", "Services"];
    this.icons = ["chart-line", "envelope-open", "sms", "users", "puzzle-piece"]

    this.state = {
      currentPage: 0,
    }

    this.firstLoad = true;
    this.changePage = this.changePage.bind(this);
    this.getSideNavItems = this.getSideNavItems.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  changePage(id) {
    this.setState({
      currentPage: id
    });
    this.forceUpdate();
  }

  getSideNavItems() {

    let items = [];

    for (let item in this.items) {
      if (item === this.state.currentPage || this.firstLoad) {
        items.push(<li onClick={()=>{ this.changePage(item)}} className={Styles.active}><FontAwesomeIcon icon={ this.icons[item]} /><span className={Styles.space}/>{ this.items[item] }</li>)
        this.firstLoad = false;
      } else {
        items.push(<li onClick={()=>{ this.changePage(item)}} ><FontAwesomeIcon icon={ this.icons[item]} /><span className={Styles.space}/>{ this.items[item] }</li>)
      }
    }
    return items;
  }

  getCurrentPage() {
    console.log(this.state.currentPage)
    console.log(this.pages[this.state.currentPage])
    return this.pages[this.state.currentPage];
  }



  render() {
    return (
      <div className={Styles.DashboardPage}>
        <NavBar></NavBar>
        <div className={Styles.container}>
          <ul className={Styles.sideNav}>
            { this.getSideNavItems() }
          </ul>
          <ShowArea page={this.state.currentPage} />
        </div>
      </div>
    );
  }
}


export default Dashboard;