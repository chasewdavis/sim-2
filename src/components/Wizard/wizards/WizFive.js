import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WizFive extends Component {
    render() {
        let { setRent, previous, complete } = this.props
        return (
            <div className='wizard'>
                <h2>Desired Rent</h2>
                <input className='input' onChange={e => setRent(e.target.value)} />
                <div className='button-container'>
                    <div className="button previous" onClick={previous}>previous</div>
                    <Link to='/nav/dash' className="button complete" onClick={complete}>complete</Link>
                </div>
            </div>
        )
    }
}