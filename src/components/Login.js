import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosURL from '../url/url'

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }

    handleChangeU(value){
        this.setState({
            username: value
        })
    }
    handleChangeP(value){
        this.setState({
            password: value
        })
    }

    login(){
        axios.post(`${axiosURL}/login`,{ username:this.state.username, password:this.state.password}).then(res=>console.log(`successfully logged in ${res.data.username} with id ${res.data.userid}`))
    }

    register(){
        axios.post(`${axiosURL}/register`,{ username:this.state.username, password:this.state.password}).then(res=>console.log(`successfully registered ${res.data.username}`))
    }



    render() {
        return (
            <div className='login'>
                <div className='login_form'>
                    <img src='https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/auth_logo.png' alt='house'/>
                    <p>Username</p>
                    <input onChange={(e)=>this.handleChangeU(e.target.value)}></input>
                    <p>Password</p>
                    <input onChange={(e)=>this.handleChangeP(e.target.value)} type='password'></input>
                    <div className='login_buttons_div'>
                    <button onClick={()=>this.login()}><Link className='black' to='/nav/dash'>Login</Link></button>
                    <button onClick={()=>this.register()} id='dark_green'><Link className='white' to='/nav/dash'>Register</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}