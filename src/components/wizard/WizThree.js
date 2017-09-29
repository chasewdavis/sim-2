import React, { Component } from 'react';

export default class WizThree extends Component {
    render() {
        let { previous, next, setImgurl } = this.props
        return (
            <div className='WizThree'>
                <h2>Image URL</h2>
                <input onChange={e => setImgurl(e.target.value)} />
                <button onClick={previous} >previous</button>
                <button onClick={next} >next</button>
            </div>
        )
    }
}