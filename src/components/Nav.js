import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div>
                nav
                {this.props.children}
            </div>
        )
    }
}