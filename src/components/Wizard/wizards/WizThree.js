import React, { Component } from 'react';

export default class WizThree extends Component {
    render() {
        let { previous, next, setImgurl } = this.props
        return (
            <div className='wizard'>
                <h2>Image URL</h2>
                <input className='input' onChange={e => setImgurl(e.target.value)} />
                <div className='button-container'>
                <div className="button previous" onClick={previous} >previous</div>
                <div className="button next" onClick={next} >next</div>
                </div>    
            </div>
        )
    }
}