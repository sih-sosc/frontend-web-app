import React, { Component } from 'react';
import Styles from './newemail.module.css';


class NewEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: false,
            
        }

        this.data = {
            "AICTE": ["ALL","Admin","Finance"],
            "Colleges": [
                "ALL",
                "Sahyadri",
                "LPU",
                "IIT"
            ],
            "Nodal centers":[
                "Manglore",
                "Ududpu",
            ]
        }
    }
    //addcontact(){
    //   var select=document.getElementById("contactlist");
    // select.options[select.options.length] = new Option('text', 'Value1');
    //}
    slecttype(type) {
        if(type!=="Type")
        {

        
        let cats = [];
        for (let k in this.data[type] ) {
           
            cats.push(<option value={this.data[type][k]} >{this.data[type][k]}</option>)
           
        }

        return (
            <select className={Styles.type} id="type"  >
               
                {cats}    
                </select>
        );
        }
    }
    get_types(){
        let types=[];
        for (let k in this.data) {
            types.push(<option value    ={k} >{k}</option>)
        }
        return types;
    }

    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.newemail}>
                    
                    <div className={Styles.editordiv}>
                    <select id="contactlist" name="contact-list" onChange={(e) => {
                        this.setState({
                            x: true,
                            type: e.target.value
                        })
                    }} >
                        <option >Type</option>

                        { this.get_types() }

                    </select>
                    {this.state.type  ? this.slecttype(this.state.type) : <div />}
                    <button className={Styles.button}>Add Contact</button>
                    </div>
                   <div className={Styles.subject}>
                    Subject <input className={Styles.subinput} ></input>
                    </div>
                    
                    <div className={Styles.emailbodydiv}>
                    Write Body of Your Email here
                    <textarea rows="30" cols="60"></textarea>
                    <div className={Styles.senddiv}>
                    <button className={Styles.sendbuttons}>Schedule</button>
                    <button className={Styles.sendbuttons}>Send</button>
                    </div>
                    </div>
                    </div>
                </div>



           
        )
    }


}
export default NewEmail;