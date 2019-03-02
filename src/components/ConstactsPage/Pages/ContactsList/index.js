import React, { Component } from 'react';
import Styles from './styles.module.css';

class ContactList extends Component {

    constructor(props) {
        super(props)

        this.contacts = [
            {
                id: "101",
                name: "AICTE Admins",
                created_by: "Rumaan Khalandar",
                date: "21/01/2019 20:23",
                total_contacts: "20",
            },
            {
                id: "102",
                name: "AICTE Admins",
                created_by: "Rumaan Khalandar",
                date: "21/01/2019 20:23",
                total_contacts: "20",
            },
            {
                id: "103",
                name: "AICTE Admins",
                created_by: "Rumaan Khalandar",
                date: "21/01/2019 20:23",
                total_contacts: "20",
            },
            {
                id: "104",
                name: "AICTE Admins",
                created_by: "Rumaan Khalandar",
                date: "21/01/2019 20:23",
                total_contacts: "20",
            },

        ]
    }


    getLogRows = () => {
        let rows = [];

        for (let item in this.contacts) {
            let log = this.contacts[item];
            rows.push(
                <tr>
                    <td>{log.id}</td>
                    <td>{log.name}</td>
                    <td>{log.created_by}</td>
                    <td>{log.date}</td>
                    <td>{log.total_contacts}</td>
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
                            <th>List ID</th>
                            <th>Name</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Total Contacts</th>
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

export default ContactList;