import React, { Component } from 'react';

export default class WizFive extends Component {
    render() {
        let {setRent} = this.props
        return (
            <div className='center_piece'>
                <div className='form'>
                    <h2> Desired Rent </h2>
                    <input onChange={e => setRent(e.target.value)}/>
                    <button> Previous State </button>
                    <button> Complete </button>
                </div>
            </div>
        )
    }
}