var Click = require('value-event/click');
var h = require('virtual-dom/h');
var history = require('observ-history');

module.exports = render;

function pushHref (uri) {
  history.set(uri);
}

function render (opts, contents) {
  if (opts.href) {
    opts['ev-click'] = Click(pushHref, opts.href);
  }
  opts.href = '#';

  return h('a', opts, contents);
}
