import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className='nav_bar'>
                    <div className='nav_center'>
                    <img src='https://github.com/DevMountain/simulation-2/blob/master/assets/header_logo.png?raw=true' alt='header house' />
                    <h3><strong>Houser</strong> Dashbord</h3>
                    <button><Link className='white' to='/'>Logout</Link></button>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}