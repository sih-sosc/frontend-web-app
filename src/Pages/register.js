import React, { Component } from 'react';


class Register extends Component{
    render()
    {
        return(
            <div>
                <h1>Register</h1>
                
                    name
                    <input id="name"></input>
                    <br />
                    Email
                    <input id="email" type="mail"></input>
                    <br />
                    Phone number
                    <input id="pno"></input>  
                    <br />
                    Password
                    <input id="pass" type="password" ></input>  
                    <br />
                    <button>Register</button>
              

            </div>



        );
    }
}


export default Register;