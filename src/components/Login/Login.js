import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosURL from '../../url/url';
import './Login.css';
import { connect } from 'react-redux';
import { login, setUsername, setPassword } from '../../ducks/reducer';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    // handleChangeU(value) {
    //     this.setState({
    //         username: value
    //     })
    // }

    // handleChangeP(value) {
    //     this.setState({
    //         password: value
    //     })
    // }

    // login() {
    //     axios.post(`${axiosURL}/login`, { username: this.state.username, password: this.state.password })
    //         .then(res => {
    //             console.log(`successfully logged in ${res.data.username} with id ${res.data.userid}`)
    //             return res.data.userid
    //         })
    // }

    register() {
        axios.post(`${axiosURL}/register`, { username: this.state.username, password: this.state.password }).then(res => console.log(`successfully registered ${res.data.username}`))
    }

    render() {
        let { login, setUsername, setPassword } = this.props
        return (
            <div className='login'>
                <div className='login-page'>
                    <img className='logo' src='https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png' alt='house' />

                    <div className='login-form'>
                        <p className='login-header' >Username</p>

                        <input className='input login-input' onChange={(e) => setUsername(e.target.value)}></input>

                        <p className='login-header' >Password</p>

                        <input className='input login-input' onChange={(e) => setPassword(e.target.value)} type='password'></input>

                        <div className='login-buttons'>

                            <Link onClick={() => login()} className='button complete' to='/nav/dash'>Login</Link>

                            <Link onClick={() => this.register()} className='button' to='/nav/dash'>Register</Link>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

let outActions = {
    login,
    setUsername,
    setPassword
}

export default connect(mapStateToProps, outActions)(Login)
