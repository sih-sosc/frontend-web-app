import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages
import LogsPage from './Pages/Logs'
import NewSMSPage from './Pages/NewSMS'
import SchedulesPage from './Pages/Schedules'

class SMSPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0,
        }

        this.firstLoad = true;
        this.tabItems = ["Logs", "Schedules", "New SMS Campaign"];
        this.getTabItems = this.getTabItems.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    getTabItems() {
        let tabs = [];

        console.log(this.state.currentTab);
        for (let tab in this.tabItems) {
            if (tab === this.state.currentTab || this.firstLoad) {
                tabs.push(<li onClick={() => { this.changeTab(tab) }} className={Styles.active}>{this.tabItems[tab]}</li>)
                this.firstLoad = false;
            } else {


                tabs.push(<li onClick={() => { this.changeTab(tab) }} >{this.tabItems[tab]}</li>)
            }
        }

        return tabs;
    }

    changeTab(id) {
        this.setState({
            currentTab: id
        })
    }

    getCurrentPage() {
        if (this.state.currentTab == 0) {
            return <LogsPage/>
        } else if (this.state.currentTab == 1) {
            return <SchedulesPage/>
        } else if (this.state.currentTab == 2) {
            return <NewSMSPage/>
        }
    }

    render() {
        return (
            <>
            <div className={Styles.tabslayout}>
                <div className={Styles.tabs}>
                    <ul>
                        {this.getTabItems()}
                    </ul>
                </div>
            </div>
            <div className={Styles.pages}>
                { this.getCurrentPage() }
            </div>
            </>
        )
    }
}

export default SMSPage;