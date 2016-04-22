# anchor-pushstate [![Build Status](https://travis-ci.org/chrisinajar/anchor-pushstate.svg?branch=master)](https://travis-ci.org/chrisinajar/anchor-pushstate)  [![Dependency Status](https://david-dm.org/chrisinajar/anchor-pushstate.svg)](https://david-dm.org/chrisinajar/anchor-pushstate) [![devDependency Status](https://david-dm.org/chrisinajar/anchor-pushstate/dev-status.svg)](https://david-dm.org/chrisinajar/anchor-pushstate#info=devDependencies)
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
