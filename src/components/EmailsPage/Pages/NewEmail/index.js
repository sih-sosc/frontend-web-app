import React, { Component } from 'react';
import Styles from './styles.module.css';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios'

// pages

class NewEmailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            schedule: "right_now",
            contacts:null,
            Emailboady:"",
            EmailSub:"",
        }

        this.emailBodyPlaceholder = `
        Type in your Email Body here...
        User "{{contact_name}}" (without quotes) to template the name of the recipient.
        Additionally you can user {{mobile_number}} and {{email_address}} for templating.
        
        `
      
    }
   
    getcontacts(){
        var token= localStorage.getItem('token');
         axios.request({
            method:"POST",
            url:"http://172.17.104.204:3000/contact_list/all",
          
          data:{token},
         
    
              })
              .then((resp)=>{
               // console.log(resp.data);
                this.setState({
                  contacts:resp.data,
                })
    
              })
              
           
    }
    showcontacts(){
        let rows =this.state.contacts
        let contacts=[]
       
            for (let item in rows) {
                let log = rows[item];
                contacts.push(
                   
                        
                        <option value={log.name}>{log.name}</option>
                        
                   
                )
            }
            return (
                <select className={Styles.dropDown}>
                    <option disabled selected>Choose Contact List</option>
                    {contacts}
                </select>
            )
           
    
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
    sendmail(){
        axios.get('http://172.17.104.204:8080/send');
        console.log("here")
        
    }
    // setEmailBody(e){
    //     this.setState({
    //         Emailboady:e.target.value
    //     })

    // }
    
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
                    {this.state.contacts==null ? this.getcontacts():this.showcontacts()}
                </div>
                <div className={Styles.emailEditor}>
                    <input type="text" placeholder="Subject of the Email" 
                    onChange={this.setEmailBody} />
                    <textarea  placeholder={this.emailBodyPlaceholder} onChange={(e)=>{
                        this.setState({
                            Emailboady:e.target.value,
                        })

                    }}></textarea>
                </div>
                <div className={Styles.buttonRow}>
                    <div className={Styles.space}></div>
                    <select onChange={this.onSchedule} className={Styles.dropDown}>
                        <option vlaue="right_now">Send Right Now</option>
                        <option value="schedule">Schedule Email</option>
                    </select>
                    { this.state.schedule === "schedule" ? this.getDatePicker() : <div/> }
                    <button className={Styles.button} onClick={this.sendmail()}>Send Mail</button>
                </div>
            </div>
        );
    }

}

export default NewEmailsPage;