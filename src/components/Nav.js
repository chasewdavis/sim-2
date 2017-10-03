import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../url/url';

export default class Nav extends Component {
    
    render() {
        const logout = () => {
            axios.post(`${url}/logout`)
            .then(response => console.log(response.data))
        }
        return (
            <div>
                <div className='nav_bar'>
                    <div className='nav_center'>
                        <img src='https://github.com/DevMountain/simulation-2/blob/master/assets/header_logo.png?raw=true' alt='header house' />
                        <h3><strong>Houser</strong> Dashbord</h3>
                        <button><Link className='white' to='/' onClick={logout} >Logout</Link></button>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}