import React, { Component } from 'react';

export default class WizThree extends Component {
    render() {
        let { previous, next, setImgurl } = this.props
        return (
            <div className='wizard'>
                <h2>Image URL</h2>
                <input onChange={e => setImgurl(e.target.value)} />
                <button className="button previous" onClick={previous} >previous</button>
                <button className="button next" onClick={next} >next</button>
            </div>
        )
    }
}