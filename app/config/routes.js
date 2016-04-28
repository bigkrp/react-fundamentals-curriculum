import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../containers/Main';
import EnterCity from '../components/EnterCity';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={EnterCity} />
        </Route>
    </Router>
);

export default routes;