import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Dash from '../components/Dash/Dash';
import Nav from '../components/Nav/Nav';
import Wizard from '../components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/nav' render={() => (
                <Nav>
                        <Route path='/nav/dash' component={Dash} />
                        <Route path='/nav/wizard' component={Wizard} />
                </Nav>
        )} />
        
    </Switch>
)