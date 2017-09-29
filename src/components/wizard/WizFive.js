import React, { Component } from 'react';

export default class WizFive extends Component {
    render() {
        let {setRent, previous, complete} = this.props
        return (
            <div className='center_piece'>
                <div className='form'>
                    <h2> Desired Rent </h2>
                    <input onChange={e => setRent(e.target.value)}/>
                    <button onClick ={complete}>Complete</button>
                    <button onClick ={previous}> Previous Step </button>
            </div>
            </div>
        )
    }
}