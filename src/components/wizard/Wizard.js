import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WizOne from './WizOne';
import WizTwo from './WizTwo';
import WizThree from './WizThree';
import WizFour from './WizFour';
import WizFive from './WizFive';
import axios from 'axios';
import url from '../../url/url';
import './Wizard.css';

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
        this.cancel = this.cancel.bind(this);
    }

    complete() {
        let { property, description, address, city, state, zip, imgurl, mortgage, loan, rent } = this.state
        console.log('completed')
        console.log(this.state)
        axios.post(`${url}/wizard`, { property, description, address, city, state, zip, imgurl, mortgage, loan, rent }).then(response => console.log(response.data))
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

    cancel() {
        this.setState({
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
        let { previous, complete, next, cancel, setProperty, setDescription, setAddress, setCity, updateState, setZip, setImgurl, setLoan, setMortgage, setRent } = this

        let wizard = <WizOne next={next} setProperty={setProperty} setDescription={setDescription} />

        let wiz = this.state.wizard;

        switch (this.state.wizard) {
            case 1:
                wizard = <WizOne next={next} setProperty={setProperty} setDescription={setDescription} />
                break;
            case 2:
                wizard = <WizTwo previous={previous} next={next} setCity={setCity} setAddress={setAddress} updateState={updateState} setZip={setZip} />
                break;
            case 3:
                wizard = <WizThree previous={previous} next={next} setImgurl={setImgurl} />
                break;
            case 4:
                wizard = <WizFour previous={previous} next={next} setLoan={setLoan} setMortgage={setMortgage} />
                break;
            case 5:
                wizard = <WizFive previous={previous} complete={complete} setRent={setRent} />
                break;
            default:
                wizard = <WizOne next={next} setProperty={setProperty} setDescription={setDescription} />
        }

        return (
            <div className='center_piece'>
                <div className='form'>
                    <div className='wiz-header' >
                        <h1>Add New Listing</h1>
                        <Link to='/nav/dash' className="button cancel" onClick={cancel}>cancel</Link>
                    </div>
                    <p className='step'>Step {wiz}</p>
                    <div className='step-counter'>
                        <div className='circle-outer'>
                            <div className={wiz > 1 ? 'circle-inner completed' : 'circle-inner'} />
                        </div>
                        <div className='circle-outer'>
                            <div className={wiz === 2 ? 'circle-inner' : wiz > 2 ? 'circle-inner completed' : 'future'} />
                        </div>
                        <div className='circle-outer'>
                            <div className={wiz === 3 ? 'circle-inner' : wiz > 3 ? 'circle-inner completed' : 'future'} > </div>
                        </div>
                        <div className='circle-outer'>
                            <div className={wiz === 4 ? 'circle-inner' : wiz > 4 ? 'circle-inner completed' : 'future'} />
                        </div>
                        <div className='circle-outer'>
                            <div className={wiz === 5 ? 'circle-inner' : wiz > 5 ? 'circle-inner completed' : 'future'} />
                        </div>
                    </div>
                    <div className='wizard-container'>
                        {wizard}
                    </div>
                </div>
            </div>
        )

        // switch (this.state.wizard) {
        //     case 1:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizOne next={next} setProperty={setProperty} setDescription={setDescription} cancel={cancel} />
        //                 </div>
        //             </div>
        //         )
        //     case 2:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizTwo previous={previous} next={next} setCity={setCity} setAddress={setAddress} updateState={updateState} setZip={setZip} cancel={cancel} />
        //                 </div>
        //             </div>
        //         )
        //     case 3:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizThree previous={previous} next={next} setImgurl={setImgurl} cancel={cancel} />
        //                 </div>
        //             </div>
        //         )
        //     case 4:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizFour previous={previous} next={next} setLoan={setLoan} setMortgage={setMortgage} cancel={cancel} />
        //                 </div>
        //             </div>
        //         )
        //     case 5:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizFive previous={previous} complete={complete} setRent={setRent} cancel={cancel} />
        //                 </div>
        //             </div>
        //         )
        //     default:
        //         return (
        //             <div className='center_piece'>
        //                 <div className='form'>
        //                     <WizOne />
        //                 </div>
        //             </div>
        //         )
        // }
    }
}