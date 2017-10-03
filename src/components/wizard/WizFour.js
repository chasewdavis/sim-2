import React, { Component } from 'react';

export default class WizFour extends Component {
    render() {
        let {setMortgage, setLoan, previous, next} = this.props
        return (
            <div className='center_piece'>
                <div className='form'>
                    <h2> Loan Amount </h2>
                    <input onChange={e => setLoan(e.target.value)}/>
                    <h2> Monthly Mortgage </h2>
                    <input onChange={e => setMortgage(e.target.value)}/>
                    <button onClick ={previous}>previous</button>
                    <button onClick ={next}>next</button>
                   
                </div>
            </div>
        )
    }
}