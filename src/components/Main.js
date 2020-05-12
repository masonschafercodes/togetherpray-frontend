import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Request from './Request';
import Read from './Read';
import Login from './Login';
import NewRequest from './NewRequest';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/request" component={Request} />
        <Route path="/read" component={Read} />
        <Route path="/login" component={Login} />
        <Route path="/newrequest" component={NewRequest} />

    </Switch>
)

export default Main;