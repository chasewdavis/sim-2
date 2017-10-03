import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../url/url';

export default class Dash extends Component {
    constructor() {
        super()
        this.state = {
            listings: []
        }
    }
    componentDidMount() {
        axios.get(`${url}/properties`)
    }
    render() {
        return (
            <div className='center_piece'>
                <div className='form'>
                    <div className='center'>
                        <button id='add_new'><Link to='/nav/wizard'>Add new property</Link></button>
                    </div>
                    <div className='filter_row'>
                        <p>List properties with "desired rent" greator than: $</p><input placeholder='0'></input><button>Filter</button><button id='dark_green'>Reset</button>
                    </div>
                    <div>
                        <hr size='1' color='black' width='92%' />
                    </div>
                    <div className='listing_div'>
                        <h5>Home Listings</h5>
                        {
                            this.state.listings.map(listing => {
                                return <div className="listing">{listing}</div>
                            })
                        }
                        <div className='listing'></div>
                        <div className='listing'></div>
                    </div>
                </div>
            </div>
        )
    }
}