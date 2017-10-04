import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../url/url';

export default class Dash extends Component {
    constructor() {
        super()
        this.state = {
            listings: [],
            rentFilter: 0,
            rentInput: 0
        }
        //this.getProperties = this.getProperties.bind(this);
        this.filterRent = this.filterRent.bind(this);
    }
    componentDidMount() {
        axios.get(`${url}/getallproperties`).then(res => {
            this.setState({
                listings: res.data
            })
        })
    }
    filterRent() {
        this.setState({
            rentFilter: this.state.rentInput
        })
    }
    handleFilterChange(num) {
        this.setState({
            rentInput: num
        })
    }
    render() {
        return (
            <div className='center_piece'>
                <div className='form'>
                    <div className='center'>
                        <button id='add_new'><Link to='/nav/wizard'>Add new property</Link></button>
                    </div>
                    <div className='filter_row'>
                        <p>List properties with "desired rent" greator than: $ <input placeholder='0' onChange={e => this.handleFilterChange(e.target.value)} ></input></p><button onClick={this.filterRent} >Filter</button><button id='dark_green'>Reset</button>
                    </div>
                    <div>
                        <hr size='1' color='black' width='92%' />
                    </div>
                    <div className='listing_div'>
                        <div className="listing-header" ><p>Home Listings</p></div>
                        {
                            this.state.listings.filter(listing => listing.rent > this.state.rentFilter).map((listing, i) => {
                                return (
                                    <div className="listing" key={i} >
                                        <button className="delete-button" onClick={() => { }} >X</button>
                                        <img className="image" src={listing.imgurl} ></img>
                                        <div className="property-box" >
                                            <p className="name">{listing.property}</p>
                                            <p>{listing.description}</p>
                                        </div>
                                        <div className="address-box" >
                                            <p>Loan: ${listing.loan}</p>                                            
                                            <p>Monthly Mortgage: ${listing.mortgage}</p>
                                            <p>Desired Rent: ${listing.rent}</p>
                                            <p>Address: {listing.address}, {listing.city}, {listing.state}</p>
                                            <p>{listing.zip}</p>
                                        </div>
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