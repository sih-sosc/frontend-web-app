import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages

class SchedulesPage extends Component {

    constructor(props) {
        super(props)
        
        this.logData = [
            {
                by: "Afroz Hussain",
                to: "AICTE Admins",
                date: "21/01/2019 20:23",
                status: "sent"
            },
            {
                by: "Ryan Nathaniel Mathew",
                to: "Admission department",
                date: "21/01/2019 20:23",
                status: "sent"
            },
            {
                by: "Musthaq Ahamad",
                to: "Department CSE",
                date: "21/01/2019 20:23",
                status: "sent"
            },
            {
                by: "Rumaan Khalander",
                to: "Electronics Department",
                date: "21/01/2019 20:23",
                status: "sent"
            },
        ]
    }

    getLogRows = () => {
        let rows = [];

        for (let item in this.logData) {
            let log = this.logData[item];
            rows.push(
                <tr>
                    <td>{log.by}</td>
                    <td>{log.to}</td>
                    <td>{log.date}</td>
                    <td>{log.status}</td>
                </tr>
            )
        }

        return rows;
    }

    render() {
        return(
            <div className={Styles.logs}>
                <table className={Styles.logTable} >
                    <thead>
                        <tr>
                            <th>Sent by</th>
                            <th>Sent To</th>
                            <th>Date</th>
                            <th>Status  </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.getLogRows() }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default SchedulesPage;