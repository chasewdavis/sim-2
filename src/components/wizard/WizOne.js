import React, { Component } from 'react';

export default class WizOne extends Component {
    render() {
        let { setProperty, setDescription, next } = this.props
        return (
            <div className='wizard'>
                <h2>Property Name</h2>
                <input onChange={e => setProperty(e.target.value)} />
                <h2>Property Description</h2>
                <input onChange={e => setDescription(e.target.value)} />
                <button className="button next" onClick={next} >next</button>
            </div>
        )
    }
}