import React, { Component } from 'react';

export default class WizOne extends Component {
    render() {
        let { setProperty, setDescription, next } = this.props
        return (
            <div className='wizard'>
                <h2>Property Name</h2>
                <input className='input' onChange={e => setProperty(e.target.value)} />
                <h2>Property Description</h2>
                <input className='input' onChange={e => setDescription(e.target.value)} />
                <div className='button-container'>
                    <div className="button next" onClick={next} >next</div>
                </div>
            </div>
        )
    }
}