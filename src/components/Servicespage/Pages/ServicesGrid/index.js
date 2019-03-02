import React, { Component } from 'react';
import Styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServiceGrid extends Component {

    constructor(props) {
        super(props)

        this.serviceData = [
            {
                name: "Mail Server 1",
                type: "email",
                url: "https://serverurl.com",
                status: "online"
            },
            {
                name: "SMS Server 1",
                url: "https://serverurl.com",
                type: "sms",
                status: "online"
            },
            {
                name: "Mail Server 2",
                url: "https://serverurl.com",
                type: "email",
                status: "offline"
            },
            {
                name: "Mail Server 3",
                url: "https://serverurl.com",
                type: "email",
                status: "offline"
            },
        ]
    }

    getStatusColor = (status) => {
        if (status === "online") 
            return "#03b921";
        else 
            return "#ff5500";
    }

    getServiceIcon = (type) => {
        if (type === "email") 
            return "envelope-open";
        else
            return "sms"
    }

    getServiceCards = () => {
        let cards = []

        for (let key in this.serviceData) {
            cards.push(
                <div className={Styles.serviceCard} >
                    <FontAwesomeIcon icon={ this.getServiceIcon(this.serviceData[key].type) } />
                    <h3>{ this.serviceData[key].name}</h3>
                    <p>{ this.serviceData[key].url}</p>
                    <p style={{ color: this.getStatusColor(this.serviceData[key].status) }}>{ this.serviceData[key].status}</p>
                </div>
            );
        }

        return cards;
    }

    render() {
        return(
            <div className={Styles.serviceGrid}>
                { this.getServiceCards() }
            </div>
        )
    }
}

export default ServiceGrid;