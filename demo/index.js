'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./app');

var app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
