import React, { Component } from 'react';
import Styles from './styles.module.css';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios'


class NewSMSPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            schedule: "right_now",
            message: "",
            contacts:null,
        }

        this.SMSBodyPlaceholder = `
        Type in your SMS Body here...
        Maximum 160 Chars
        `
    }

    onChange = date => this.setState({ date })

    onSchedule = event => this.setState({ schedule: event.target.value })

    onMessageChange = event => {
        let message = event.target.value;
        this.setState({
            message: message.slice(0, 160)
        });

    }

    sendsms(){
        
    }

getDatePicker = () => {
    return (
        <DateTimePicker
            onChange={this.onChange}
            value={this.state.date}
        />
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


render() {
    return (
        <div className={Styles.SMSEditorPage}>
            <div className={Styles.flexRow}>
                <select className={Styles.dropDown}>
                    <option disabled selected>SMS Services</option>
                    <option>Server1 Bangalore</option>
                    <option>Server2 Mumbai</option>
                    <option>Server3 Hyderabad</option>
                </select>
                {/* <select className={Styles.dropDown}>
                    <option disabled selected>Choose Contact List</option>
                    <option>AICTE Nodal Centers</option>
                    <option>All College Students</option>
                    <option>All College Administrations</option>
                </select> */}
                 {this.state.contacts === null ? this.getcontacts() : this.showcontacts()}
                <p className={Styles.SMSLimit}>Limit {this.state.message.length}/160</p>
            </div>
            <div className={Styles.SMSEditor}>
                <textarea onChange={this.onMessageChange} placeholder={this.SMSBodyPlaceholder} value={this.state.message}>
                
                </textarea>
            </div>
            <div className={Styles.buttonRow}>
                <div className={Styles.space}></div>
                <select onChange={this.onSchedule} className={Styles.dropDown}>
                    <option vlaue="right_now">Send Right Now</option>
                    <option value="schedule">Schedule SMS</option>
                </select>
                {this.state.schedule === "schedule" ? this.getDatePicker() : <div />}
                <button className={Styles.button}>Send Mail</button>
            </div>
        </div>
    );
}

}

export default NewSMSPage;