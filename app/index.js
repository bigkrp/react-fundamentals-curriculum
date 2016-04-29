// Vendors
// import '~bootstrap.css';
import '!style!css!bootstrap/dist/css/bootstrap.min.css';
// Import styles
import './styles.less';

// React
import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';


render(
    routes,
    document.getElementById('app')
);
