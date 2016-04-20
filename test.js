var test = require('tape');
var thermometer = require('thermometer');
var Observ = require('observ');
var dispatch = require('dispatch-event');
var window = require('global/window');

var path = '/';
window.history = {
  pushState: pushState
};

var anchor = require('./');

// sample component using anchor
function Component () {
  return Observ({
    href: '/foo'
  });
}

Component.render = function (state) {
  return anchor({
    className: 'indeed',
    href: state.href
  }, [
    'Click here!',
    'foo'
  ]);
};

test(function (t) {
  thermometer.createComponent(Component, function (state, elem, done) {
    t.equal(elem.className, 'indeed', 'has attributes');
    t.equal(elem.childNodes.length, 2, 'has children');
    t.equal(elem.childNodes[1].data, 'foo', 'theyre right');

    // test clicking it
    t.equal(elem.href, '#', 'replaces href with #');
    t.equal(path, '/');
    dispatch(elem, 'click');
    t.equal(path, '/foo', 'applies pushstate');
    t.end();
    done();
  });
});

function pushState (state, somethingElse, uri) {
  path = uri;
}

