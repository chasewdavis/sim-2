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
        //this.getProperties = this.getProperties.bind(this);
    }
    componentDidMount() {
        axios.get(`${url}/getallproperties`).then(res => {
            console.log(res)
            this.setState({
                listings: res.data
            })
        })
        console.log(this.state.listings)
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
                            this.state.listings.map((listing, i) => {
                                console.log(listing)
                                return (
                                    <div className="listing" key={i} >
                                        <p>{listing.property}</p>
                                        <p>{listing.description}</p>
                                        <p>Address: {listing.address}</p>
                                        <p>City: {listing.city}</p>
                                        <p>State: {listing.state}</p>
                                        <p>Zip: {listing.zip}</p>
                                        <p>{listing.imgurl}</p>
                                        <p>Mortgage: ${listing.mortgage}</p>
                                        <p>Loan: ${listing.loan}</p>
                                        <p>Rent: ${listing.rent}</p>
                                    </div>
                                )
                            })
                        }
                        {/* <button onClick={this.getProperties} >GET PROPERTIES</button> */}
                    </div>
                </div>
            </div>
        )
    }
}