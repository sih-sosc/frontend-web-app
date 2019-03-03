import React, { Component } from 'react';
import Styles from './styles.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
class LogsPage extends Component {

    constructor(props) {
        super(props)

        this.logData = [
            // {
            //     by: "Afroz Hussain",
            //     to: "AICTE Admins",
            //     date: "21/01/2019 20:23",
            //     status: "sent"
            // },
            // {
            //     by: "Ryan Nathaniel Mathew",
            //     to: "Admission department",
            //     date: "21/01/2019 20:23",
            //     status: "sent"
            // },
            // {
            //     by: "Musthaq Ahamad",
            //     to: "Department CSE",
            //     date: "21/01/2019 20:23",
            //     status: "sent"
            // },
            // {
            //     by: "Rumaan Khalander",
            //     to: "Electronics Department",
            //     date: "21/01/2019 20:23",
            //     status: "sent"
            // },
        ]
    }


    getLogRows = () => {
        var token= localStorage.getItem('token');
        console.log(token);
      axios.request({
            method:"POST",
            url:"http://172.17.104.204:3000/logs",
          
          data:{token},
         

              })
      .then((logData)=>{
          console.log(logData);
      })
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
                        <Link to="/logs/24">{ this.getLogRows() }</Link>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default LogsPage;