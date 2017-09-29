import React, { Component } from 'react';

export default class WizFour extends Component {
    render() {
        let {setAmount, setMortgage, previous, next} = this.props
        return (
            <div className='center_piece'>
                <div className='form'>
                    <h2> Loan Amount </h2>
                    <input onChange={e => setAmount(e.target.value)}/>
                    <h2> Monthly Mortgage </h2>
                    <input onChange={e => setMortgage(e.target.value)}/>
                    <button onClick ={next}> Previous Step </button>
                    <button onClick ={previous}> Next Step </button>
                </div>
            </div>
        )
    }
}