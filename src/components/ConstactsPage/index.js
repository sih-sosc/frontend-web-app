import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages
import ContactList from './Pages/ContactsList';
import AddContact from './Pages/AddContact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                if (tab == this.tabItems.length-1) {
                    tabs.push(<li onClick={() => { this.changeTab(tab) }} className={Styles.active}><FontAwesomeIcon icon="plus-circle" /><span className="tabSpace" />{this.tabItems[tab]}</li>)
                } else
                    tabs.push(<li onClick={() => { this.changeTab(tab) }} className={Styles.active}>{this.tabItems[tab]}</li>)
                this.firstLoad = false;
            } else {
                if (tab == this.tabItems.length-1) {
                    tabs.push(<li onClick={() => { this.changeTab(tab) }} ><FontAwesomeIcon icon="plus-circle" /><span className="tabSpace" />{this.tabItems[tab]}</li>)
                } else
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
            return <ContactList />
        } else if (this.state.currentTab == 1) {
            return <AddContact />
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
                    {this.getCurrentPage()}
                </div>
            </>
        )
    }
}

export default ContactsPage;