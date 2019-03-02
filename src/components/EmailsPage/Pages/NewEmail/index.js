import React, { Component } from 'react';
import Styles from './styles.module.css';
import DateTimePicker from 'react-datetime-picker';

// pages

class NewEmailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            schedule: "right_now"
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
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
            />
        );
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
                    <select className={Styles.dropDown}>
                        <option disabled selected>Choose Contact List</option>
                        <option>AICTE Nodal Centers</option>
                        <option>All College Students</option>
                        <option>All College Administrations</option>
                    </select>
                </div>
                <div className={Styles.emailEditor}>
                    <input type="text" placeholder="Subject of the Email" />
                    <textarea placeholder={this.emailBodyPlaceholder} />
                </div>
                <div className={Styles.buttonRow}>
                    <div className={Styles.space}></div>
                    <select onChange={this.onSchedule} className={Styles.dropDown}>
                        <option vlaue="right_now">Send Right Now</option>
                        <option value="schedule">Schedule Email</option>
                    </select>
                    { this.state.schedule === "schedule" ? this.getDatePicker() : <div/> }
                    <button className={Styles.button}>Send Mail</button>
                </div>
            </div>
        );
    }

}

export default NewEmailsPage;