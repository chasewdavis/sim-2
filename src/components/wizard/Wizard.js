import React, { Component } from 'react';
import WizOne from './WizOne';
import WizTwo from './WizTwo';
import WizThree from './WizThree';
import WizFour from './WizFour';
import WizFive from './WizFive';
import axios from 'axios';
import url from '../../url/url';

export default class Wizard extends Component {

    constructor() {
        super()
        this.state = {
            property: '',
            description: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            imgurl: '',
            mortgage: '',
            loan: '',
            rent: '',
            wizard: 1
        }
        this.next = this.next.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.setCity = this.setCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.setZip = this.setZip.bind(this);
        this.setImgurl = this.setImgurl.bind(this);
        this.setMortgage = this.setMortgage.bind(this);
        this.setLoan = this.setLoan.bind(this);
        this.setRent = this.setRent.bind(this);
        this.previous = this.previous.bind(this);
        this.complete = this.complete.bind(this);
    }

    complete() {
        console.log('completed')
        console.log(this.state)
        axios.post(`${url}/wizard`, this.state).then(response => console.log(response))
    }

    previous() {
        this.setState({
            wizard: this.state.wizard - 1
        })
    }

    next() {
        console.log(this.state)
        this.setState({
            wizard: this.state.wizard + 1
        })
    }

    setProperty(val) {
        this.setState({
            property: val
        })
    }

    setDescription(val) {
        this.setState({
            description: val
        })
    }
    setAddress(val) {
        this.setState({
            address: val
        })
    }
    setCity(val) {
        this.setState({
            city: val
        })
    }
    updateState(val) {
        this.setState({
            state: val
        })
    }
    setZip(val) {
        this.setState({
            zip: val
        })
    }
    setImgurl(val) {
        this.setState({
            imgurl: val
        })
    }
    setMortgage(val) {
        this.setState({
            mortgage: val
        })
    }
    setLoan(val) {
        this.setState({
            loan: val
        })
    }
    setRent(val) {
        this.setState({
            rent: val
        })
    }

    render() {
        let { previous, complete, next, setProperty, setDescription, setAddress, setCity, updateState, setZip, setImgurl, setLoan, setMortgage, setRent } = this
        switch (this.state.wizard) {
            case 1:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizOne next={next} setProperty={setProperty} setDescription={setDescription} />
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizTwo previous={previous} next={next} setCity={setCity} setAddress={setAddress} updateState={updateState} setZip={setZip} />
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizThree previous={previous} next={next} setImgurl={setImgurl} />
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizFour previous={previous} next={next} setLoan={setLoan} setMortgage={setMortgage} />
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizFive previous={previous} complete={complete} setRent={setRent} />
                        </div>
                    </div>
                )
            default:
                return (
                    <div className='center_piece'>
                        <div className='form'>
                            <WizOne />
                        </div>
                    </div>
                )
        }
    }
}