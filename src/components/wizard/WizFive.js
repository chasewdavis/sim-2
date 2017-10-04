import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WizFive extends Component {
    render() {
        let { setRent, previous, complete } = this.props
        return (
            <div className='wizard'>
                <h2>Desired Rent</h2>
                <input onChange={e => setRent(e.target.value)} />
                <button className="button previous" onClick={previous}>previous</button>
                <Link to='/nav/dash' className="button complete" onClick={complete}>complete</Link>
            </div>
        )
    }
}