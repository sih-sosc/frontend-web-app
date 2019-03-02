import React, { Component } from 'react';
import Styles from './styles.module.css';

// pages

class NewEmailsPage extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div className={Styles.emailEditorPage}>
                <div className={Styles.flexRow}>
                    <select>
                        <option disabled selected>MicroServices</option>
                    </select>
                </div>
                <div className={Styles.flexRow}>
                
                </div>
                <div className={Styles.emailEditor}>
                
                </div>
                <div className={Styles.buttonRow}>
                
                </div>
            </div>
        );
    }

}

export default NewEmailsPage;