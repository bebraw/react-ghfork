'use strict';

var React = require('react');


module.exports = React.createClass({
    render() {
        var className = 'github-fork-ribbon-wrapper';

        if(this.props.className) {
            className += ' ' + this.props.className;
        }

        var text = this.props.text || 'Fork me on GitHub';

        return <div className={className}>
            <div className='github-fork-ribbon' style={this.props.style}>
                <a href={'https://github.com/' + this.props.project}>{text}</a>
            </div>
        </div>;
    }
});
