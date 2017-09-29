import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Dash from './components/Dash.js';
import Nav from './components/Nav.js';
import Wizard from './components/wizard/Wizard.js';
import WizOne from './components/wizard/WizOne.js';
import WizTwo from './components/wizard/WizTwo.js';
import WizThree from './components/wizard/WizThree.js';
import WizFour from './components/wizard/WizFour.js';
import WizFive from './components/wizard/WizFive.js';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/nav' render={() => {
            return (
                <Switch>
                    <Route exact path='/nav/dash' component={Login} />
                    <Route exact path='/nav/wizard' component={Wizard} />
                    <Route exact path='/nav/wizone' component={WizOne} />
                    <Route exact path='/nav/wiztwo' component={WizTwo} />
                    <Route exact path='/nav/wizthree' component={WizThree} />
                    <Route exact path='/nav/wizfour' component={WizFour} />
                    <Route exact path='/nav/wizfive' component={WizFive} />
                </Switch>
            )
        }} />
    </Switch>
)