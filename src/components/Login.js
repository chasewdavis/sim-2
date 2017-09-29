import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className='login_form'>
                    <img src='https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png' alt='house'/>
                    <p>Username</p>
                    <input></input>
                    <p>Password</p>
                    <input type='password'></input>
                    <div className='login_buttons_div'>
                    <button><Link className='black' to='/nav/dash'>Login</Link></button>
                    <button id='dark_green'><Link className='white' to='/nav/dash'>Register</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}