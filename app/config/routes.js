import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../containers/Main';

function Home() {
    return (
        <h1>Home!</h1>
    );
}

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;