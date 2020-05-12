import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Interact from './Interact';
import Read from './Read';
import Login from './Login';
import AccountCreation from './AccountCreation';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interact" component={Interact} />
        <Route path="/read" component={Read} />
        <Route path="/login" component={Login} />
        <Route path="/createaccount" component={AccountCreation} />

    </Switch>
)

export default Main;