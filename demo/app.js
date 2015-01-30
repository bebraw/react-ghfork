'use strict';

require('highlight.js/styles/github.css');

require('./demo.css');
require('../gh-fork-ribbon.ie.css');
require('../gh-fork-ribbon.css');

var React = require('react');

var Fork = require('../index.jsx');

var readme = require('../README.md');


module.exports = React.createClass({
    render() {
        var project = 'bebraw/react-ghfork';

        return <article>
            <Fork project={project} className='left'></Fork>
            <Fork project={project} className='right' style={{
                backgroundColor: '#000'
            }}></Fork>
            <Fork project={project} className='left-bottom' style={{
                backgroundColor: '#060'
            }}></Fork>
            <Fork project={project} className='right-bottom' text='Forkkaa minut'></Fork>

            <div dangerouslySetInnerHTML={{__html: readme}}></div>
        </article>;
    },
});
