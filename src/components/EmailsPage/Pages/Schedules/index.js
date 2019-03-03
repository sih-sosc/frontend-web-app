import React, { Component } from 'react';
import Styles from './styles.module.css';
import axios from 'axios'

// pages

class SchedulesPage extends Component {

    constructor(props) {
        super(props)
        this.state={
            schedules:null,
        }
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


getSchedules(){
    var token= localStorage.getItem('token');
     axios.request({
        method:"POST",
        url:"http://172.17.104.204:3000/schedules/all",
      
      data:{token},
     

          })
          .then((resp)=>{
           // console.log(resp.data);
            this.setState({
                schedules:resp.data,
            })

          })




}
    getLogRows = () => {
        let rows = this.state.schedules;
        let schedules=[]
        for (let item in rows) {
            let log = rows[item];
           schedules.push(
                <tr>
                    <td>{log.name}</td>
                    <td>{log.created_by}</td>
                    <td>{log.created_at}</td>
                    <td>{log.date}</td>
                    <td>{log.updatedAt}</td>
                </tr>
            )
        }

        return schedules;
    }

    render() {
        return(
            <div className={Styles.logs}>
                <table className={Styles.logTable} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created By</th>
                            <th>Created At</th>
                            <th>Date  </th>
                            <th>UpdatedAt  </th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.schedules===null ? this.getSchedules():this.getLogRows()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default SchedulesPage;