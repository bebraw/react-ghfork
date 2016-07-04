'use strict';

var React = require('react');


module.exports = React.createClass({
    render() {
        let {text, style, project, className, ...props} = this.props;

        className = className || '';
        className += ' github-fork-ribbon-wrapper';

        text = this.props.text || 'Fork me on GitHub';

        return <div className={className}>
            <div className='github-fork-ribbon' style={style}>
                <a href={'https://github.com/' + project} {...props}>{text}</a>
            </div>
        </div>;
    }
});
