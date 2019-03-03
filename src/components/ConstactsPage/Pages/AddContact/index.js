import React, { Component } from 'react';
import Styles from './styles.module.css';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import axios from 'axios'

class ContactList extends Component {
  constructor(props) {
    super(props)




    this.state = {
      getinfo: false,
      name: "",
      ContactList: null,
    }
  }

  handlename = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  sendContact() {
    var contactdetails = {
      name: this.state.name,
      contacts: this.state.ContactList,
    }
    console.log(contactdetails);
    var token = localStorage.getItem('token');
    axios.request({
      method: "POST",
      url: "http://172.17.104.204:3000/contact_list/new",

      data: { 'token':token,
              'name':contactdetails.name,
              'data':contactdetails.contacts,
               },


    });
  }

  setContactList = (resp) => { this.setState({ ContactList: resp }); }

  fileHandler = (event, setContactList ) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }

      else {

       setContactList(resp.rows);


      }
    });

  }

  render() {
    return (
      <div>

        <div className={Styles.page}>
          <div className={Styles.title}>Add Contact List<div className={Styles.dash}></div></div>
          <div className={Styles.inputtabs}>
            Name:    <br />
            <input id="name" className={Styles.nameinput} onChange={this.handlename}></input>
            <p className={Styles.uploadyourfile}>Upload your File:     </p> 
            <div className={Styles.fileinput}>
            <input type="file" className={Styles.button} onChange={ (e) => {this.fileHandler(e, this.setContactList)}} style={{ "padding": "10px" }} />
            {this.state.ContactList !== null ? this.sendContact() : <div />}
            </div>
          </div>
        </div>
        
      </div>
    )


  }
}

export default ContactList;