import React, { Component } from 'react';
import Styles from './styles.module.css';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

class ContactList extends Component {
      
fileHandler(event) {
    let fileObj = event.target.files[0];
  
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        
        console.log(resp);
    //     const  merged = [].concat.apply([], data);
    //     console.log(merged);
    //    document.getElementById("mails").value= data;
        
      }
    });
       
  }

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            <h1>Hello</h1>
            <input id="mails" value="hey" ></input>
        
         <input type="file" onChange={this.fileHandler} style={{"padding":"10px"}} />
         </div>
        )


    }
}

export default ContactList;