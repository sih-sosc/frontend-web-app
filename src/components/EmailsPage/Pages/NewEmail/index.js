import React, { Component } from 'react';
import Styles from './styles.module.css';
import DateTimePicker from 'react-datetime-picker';
import ContactList from '../../../ConstactsPage/Pages/AddContact';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';


// pages

class NewEmailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            schedule: "right_now",
            contacts: null,
            emailbody: "",
            emailsubject: "",
            email:"",
        }

        this.emailBodyPlaceholder = `
        Type in your Email Body here...
        User "{{contact_name}}" (without quotes) to template the name of the recipient.
        Additionally you can user {{mobile_number}} and {{email_address}} for templating.
        `
    }

    onChange = date => this.setState({ date })

    onSchedule = event => this.setState({ schedule: event.target.value })

    getDatePicker = () => {
        return (
            <div className={Styles.schedule}>
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
            />
           
            <input placeholder="Job Name"></input>
            </div>
        );
    }


    getcontacts() {
        var token = localStorage.getItem('token');
        axios.request({
            method: "POST",
            url: "http://172.17.104.204:3000/contact_list/all",

            data: { token },


        })
            .then((resp) => {
                console.log(resp.data);
                this.setState({
                    contacts: resp.data,
                })

            })


    }
    showcontacts() {
        let rows = this.state.contacts
        let contacts = []
        //  for (let item in rows) {
        //    let log= rows[item];
        //    contacts.push(
        //      <option>log.name</option>)
        // }
        rows.forEach(element => {
            contacts.push(<option>{element.name}</option>)
        });
        return (<select className={Styles.dropDown}>
            <option disabled selected>Choose Contact List</option>
            {contacts}

        </select>)


    }
    sendEmail() {
        let emailbody = `
            <html><p>${this.state.emailbody}
             
                  </p><img src="http://172.17.104.204:3000/track/2323/1121" alt="Sent by AICTE" /></html>
        `;
        let emailsubject = this.state.emailsubject;
        var token = localStorage.getItem('token');
        let url = `http://172.17.104.204:8080/send?email_body=${emailbody}&email_subject=${emailsubject}`;
        // axios.get(url, {
        //     data:{
        //         email_body: emailbody,
        //         email_subject: emailsubject
        //     }
        // });

        // axios.request({
        //     method: "POST",
        //     url: "http://172.17.104.204:8080/send",
        //     data:{
        //         email_body: emailbody,
        //         email_subject: emailsubject
        //     }
        // })

        axios.post("http://172.17.104.204:8080/send?email_subject=test", {
            "email_subject": emailsubject,
            "email_body": emailbody,
        });
        // axios  . .,/.get("http://172.17.104.204:8080/send",{
        //     data:{
        //         email_body: emailbody,
        //         email_subject: emailsubject
        //     }
        // });
        console.log("email body");
        toast("Sending....");
        console.log(emailbody);
    }


    render() {
        return (
            <div className={Styles.emailEditorPage}>
                <div className={Styles.flexRow}>
                    <select className={Styles.dropDown}>
                        <option disabled selected>Email Services</option>
                        <option>Server1 Bangalore</option>
                        <option>Server2 Mumbai</option>
                        <option>Server3 Hyderabad</option>
                    </select>
                    {this.state.contacts === null ? this.getcontacts() : this.showcontacts()}

                </div>
                <div className={Styles.emailEditor}>
                <input type="text" placeholder="Email-reciepients" onChange={(e) => {
                        this.setState({
                            emails: e.target.value,

                        })
                    }} />
                    <input type="text" placeholder="Subject of the Email" onChange={(e) => {
                        this.setState({
                            emailsubject: e.target.value,

                        })
                    }} />
                    <textarea placeholder={this.emailBodyPlaceholder} onChange={(e) => {
                        this.setState({
                            emailbody: e.target.value,

                        })
                    }} />
                </div>
                <div className={Styles.buttonRow}>
                    <div className={Styles.space}></div>
                    <select onChange={this.onSchedule} className={Styles.dropDown}>
                        <option vlaue="right_now">Send Right Now</option>
                        <option value="schedule">Schedule Email</option>
                    </select>
                    {this.state.schedule === "schedule" ? this.getDatePicker() : <div />}
                    <button className={Styles.button} onClick={() => { this.sendEmail() }}   >Send Mail</button>
                </div>
                <ToastContainer />
            </div>
        );
    }

}

export default NewEmailsPage;