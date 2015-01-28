'use strict';

require('highlight.js/styles/github.css');
require('./demo.css');
require('../style.css');

var React = require('react');

var Fork = require('../index.jsx');

var readme = require('../README.md');


module.exports = React.createClass({
    render() {
        return <article>
            <Fork project='bebraw/react-ghfork'></Fork>
            <div dangerouslySetInnerHTML={{__html: readme}}></div>
        </article>;
    },
});
