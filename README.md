# anchor-pushstate
Simple stateless virtual-dom element that will pushstate the href given.

## Installation

`npm install anchor-pushstate`

## Usage

```js
var h = require('virtual-dom/h');
var anchor = require('anchor-pushstate');

function render (state) {
  return h('div', [
    'Oh hey!',
    anchor({
      href: '/foo'
    }, [
      'Click here!'
    ])
  ]);
}
```

## Contributing

`npm run test`

# License
MIT
