'use strict';

const React = require('react');

module.exports = function({text, style, project, className, ...props}) {
    className = className || '';
    className += ' github-fork-ribbon-wrapper';

    text = text || 'Fork me on GitHub';

    return <div className={className}>
        <div className='github-fork-ribbon' style={style}>
            <a href={'https://github.com/' + project} {...props}>{text}</a>
        </div>
    </div>;
}
