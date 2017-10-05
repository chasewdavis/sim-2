import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../../url/url';
import './Dash.css';
import { connect } from 'react-redux';
import { getProperties, filterRent, setFilter } from '../../ducks/reducer'; 

class Dash extends Component {
    constructor() {
        super()
        this.state = {
            listings: [],
            rentFilter: 0,
            rentInput: 0
        }
        //this.getProperties = this.getProperties.bind(this);
        //this.filterRent = this.filterRent.bind(this);
    }
    // componentDidMount() {
    //     axios.get(`${url}/getallproperties`).then(res => {
    //         this.setState({
    //             listings: res.data
    //         })
    //     })
    // }
    // filterRent() {
    //     this.setState({
    //         rentFilter: this.state.rentInput
    //     })
    // }
    // handleFilterChange(num) {
    //     this.setState({
    //         rentInput: num
    //     })
    // }
    render() {
        let { listings, getProperties, filterRent, setFilter } = this.props
        return (
            <div className='center_piece'>
                <div className='form'>
                    <div className=''>

                        <Link className='button add' to='/nav/wizard'>Add new property</Link>

                        <div className='filter-row'>
                            <p>List properties with "desired rent" greator than: $ <input className='input' placeholder='0' onChange={e => setFilter(e.target.value)} ></input></p>
                            <button className='button complete' onClick={filterRent} >Filter</button>
                            <button className='button' >Reset</button>
                        </div>

                        <div className='listing-div'>
                            <div className="listing-header" ><p>Home Listings</p></div>
                            {
                                listings.filter(listing => listing.rent > this.state.rentFilter).map((listing, i) => {
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
                                                <p>Address: {listing.address} {listing.city}, {listing.state}</p>
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

let outActions = {
    getProperties,
    filterRent,
    setFilter
}

export default connect(mapStateToProps, outActions)(Dash)
