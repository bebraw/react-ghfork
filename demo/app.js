'use strict';

require('../style.css');

var React = require('react');

var Fork = require('../index.jsx');


module.exports = React.createClass({
    render() {
        return <Fork project='bebraw/react-ghfork'></Fork>;
    },
});
