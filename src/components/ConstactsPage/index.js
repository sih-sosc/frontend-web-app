import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages

class ContactsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0,
        }

        this.firstLoad = true;
        this.tabItems = ["Contact List", "New Contact List"];
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


    render() {
        return (
            <div className={Styles.tabslayout}>
            <div className={Styles.tabs}>
                <ul>
                    {this.getTabItems()}
                </ul>
            </div>
        </div>
        )
    }
}

export default ContactsPage;