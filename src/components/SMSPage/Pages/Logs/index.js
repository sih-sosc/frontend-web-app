import React, { Component } from 'react';
import Styles from './styles.module.css';

class LogsPage extends Component {

    constructor(props) {
        super(props)

        this.logData = [
            {
                by: "Rumaan Khalandar",
                to: "AICTE Admins",
                date: "21/01/2019 20:23",
                status: "sent"
            },
            {
                by: "Akashdeep Bhagat",
                to: "Admission department",
                date: "21/01/2019 20:23",
                status: "sent"
            },
            {
                by: "Basawarajeshwari",
                to: "Department CSE",
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

export default LogsPage;