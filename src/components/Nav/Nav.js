import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../../url/url';

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
                        <div className='nav-header'>
                            <img className='nav-logo' src='https://github.com/DevMountain/simulation-2/blob/master/assets/header_logo.png?raw=true' alt='header house' />
                            <h3>Houser Dashbord</h3>
                        </div>    
                        <Link className='button logout' to='/' onClick={logout} >Logout</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}