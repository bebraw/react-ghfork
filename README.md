[![build status](https://secure.travis-ci.org/bebraw/react-ghfork.png)](http://travis-ci.org/bebraw/react-ghfork)
# react-ghfork - GitHub fork image for React

```javascript
var Fork = require('react-ghfork');

require('react-ghfork/gh-fork-ribbon.ie.css'); // ie support
require('react-ghfork/gh-fork-ribbon.css');

...

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
```

## Acknowledgements

Styling by [Simon Whitaker](http://simonwhitaker.github.io/github-fork-ribbon-css/) (MIT). This library just wraps his work.

## License

`react-ghfork` is available under MIT. See LICENSE for more details.

