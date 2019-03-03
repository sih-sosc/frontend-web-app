import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages

class DashboardPage extends Component {

    constructor(props) {
        super(props);

        this.tabItems = ["Logs", "Schedules"];
        this.state = {

        }
        

    }

    render() {
        return (
            <div className={Styles.tabslayout}>
                <div className={Styles.tabs}>
                    <ul>
                        <li>Logs</li>
                        <li>Schedules</li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashboardPage;