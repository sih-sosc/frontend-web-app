import React, { Component } from 'react';
import Styles from './styles.module.css';
import axios from 'axios'
import { get } from 'https';
class ContactList extends Component {

    constructor(props) {
        super(props)

        this.state={
            contacts :null}
        //     {
        //         id: "101",
        //         name: "AICTE Admins",
        //         created_by: "Rumaan Khalandar",
        //         date: "21/01/2019 20:23",
        //         total_contacts: "20",
        //     },
        //     {
        //         id: "102",
        //         name: "AICTE Admins",
        //         created_by: "Rumaan Khalandar",
        //         date: "21/01/2019 20:23",
        //         total_contacts: "20",
        //     },
        //     {
        //         id: "103",
        //         name: "AICTE Admins",
        //         created_by: "Rumaan Khalandar",
        //         date: "21/01/2019 20:23",
        //         total_contacts: "20",
        //     },
        //     {
        //         id: "104",
        //         name: "AICTE Admins",
        //         created_by: "Rumaan Khalandar",
        //         date: "21/01/2019 20:23",
        //         total_contacts: "20",
        //     },

        // ]
    }
  

//      getLogRows = async() => {
//         var token= localStorage.getItem('token');
//         var data
//        let resp= await axios.request({
//             method:"POST",
//             url:"http://172.17.104.204:3000/contacts/all",
          
//           data:{token},
         

//               });
      
//         console.log(resp.data);
//         let List = resp.data;
//         this.getlist(List);
//             }
// getlist(List){
//     var rows=[]
//     this.setState({
//         contacts:List
//     })

//     for (let item in this.contacts) {
//         let log = this.contacts[item];
//         rows.push(
//             <tr>
//                 <td>{log.id}</td>
//                 <td>{log.name}</td>
//                 <td>{log.created_by}</td>
//                 <td>{log.date}</td>
//                 <td>{log.total_contacts}</td>
//             </tr>
//         )
//     }
   

//     return rows;


// }
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
    console.log(rows);
        for (let item in rows) {
            let log = rows[item];
            contacts.push(
                <tr>
                    <td>{log.id}</td>
                    <td>{log.name}</td>
                    <td>{log.created_by}</td>
                    <td>{log.created_at}</td>
                    <td>{log.total_contacts}</td>
                </tr>
            )
        }
        return contacts;
       

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
                        { this.state.contacts==null ? this.getcontacts():this.showcontacts()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ContactList;