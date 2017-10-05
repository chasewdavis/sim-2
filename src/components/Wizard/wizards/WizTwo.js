import React, { Component } from 'react';

export default class WizTwo extends Component {
    render() {
        let { previous, next, setAddress, setCity, updateState, setZip } = this.props
        return (
            <div className='wizard'>
                <h2>Address</h2>
                <input className='input' onChange={e => setAddress(e.target.value)} />
                <h2>City</h2>
                <input className='input' onChange={e => setCity(e.target.value)} />
                <h2>State</h2>
                <input className='input' onChange={e => updateState(e.target.value)} />
                <h2>Zip</h2>
                <input className='input' onChange={e => setZip(e.target.value)} />
                <div className='button-container'>
                    <div className="button previous" onClick={previous} >previous</div>
                    <div className="button next" onClick={next} >next</div>
                </div>
            </div>
        )
    }
}