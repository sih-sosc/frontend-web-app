import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages
import DashboardPage from '../DashboardPage';
import EmailsPage from '../EmailsPage';
import SMSPage from '../SMSPage';
import ContactsPage from '../ConstactsPage';
import ServicesPage from '../Servicespage';


class ShowArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }

        this.getCurrentPage = this.getCurrentPage.bind(this);
    }

    getCurrentPage() {
        console.log(this.props.page);
        
        if (this.props.page == 0) {
            return <DashboardPage/>
        } else if (this.props.page == 1) {
            return <EmailsPage/>
        } else if (this.props.page == 2) {
            return <SMSPage/>
        } else if (this.props.page == 3) {
            return <ContactsPage/>
        } else if (this.props.page == 4) {
            return <ServicesPage/>
        } else {
            return <DashboardPage/>
        }
        
    }

    render() {
        return (
            <div id="showArea" className={Styles.container}> 
                { this.getCurrentPage() }
            </div>
        )
    }
}

export default ShowArea;