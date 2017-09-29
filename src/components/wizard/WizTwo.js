import React, { Component } from 'react';

export default class WizTwo extends Component {
    render() {
        let { previous, next, setAddress, setCity, updateState, setZip } = this.props
        return (
            <div className='WizTwo'>
                <h2>Address</h2>
                <input onChange={e => setAddress(e.target.value)} />
                <h2>City</h2>
                <input onChange={e => setCity(e.target.value)} />
                <h2>State</h2>
                <input onChange={e => updateState(e.target.value)} />
                <h2>Zip</h2>
                <input onChange={e => setZip(e.target.value)} />
                <button onClick={previous} >previous</button>
                <button onClick={next} >next</button>
            </div>
        )
    }
}