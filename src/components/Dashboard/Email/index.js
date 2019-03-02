import React, { Component } from 'react';
import Styles from './styles.module.css';


class Email extends Component{

render(){
    return(
        <div className={Styles.email}>
            <div className={Styles.tabs}>
            <button className={Styles.button}>Logs</button>
            <button className={Styles.button}>Scheduled</button>
            <button className={Styles.button}>New Email</button>

            </div>




        </div>
    )
}


}
export default Email;