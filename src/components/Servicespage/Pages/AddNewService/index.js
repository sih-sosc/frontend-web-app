import React, { Component } from 'react';
import Styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddNewService extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={Styles.serviceEditorPage}>
                <div className={Styles.flexRow}>
                    <select className={Styles.dropDown}>
                        <option disabled selected>Type of Service</option>
                        <option>Email</option>
                        <option>SMS</option>
                    </select>
                </div>
                <div className={Styles.flexRow}>
                <FontAwesomeIcon icon="link" />
                <input className={Styles.serviceEditorInput} type="text" placeholder="Microservice Deploy URL" />
                </div>
                <div className={Styles.flexRow}>
                    <FontAwesomeIcon icon="lock" />
                    <input className={Styles.serviceEditorInput} type="password" placeholder="MicroService Secret Key" />
                </div>
                <div className={Styles.buttonRow}>
                    <button className={Styles.button}>Add Service</button>
                </div>
            </div>
        )
    }
}

export default AddNewService;