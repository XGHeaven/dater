// main dater file

//var _ = require('utils')._;
var _ = require('lodash');
var require_dir = require('require-dir');

var dater = require('./dater');
module.exports = dater;

_.forOwn(require_dir('fn'), function(value, key) {
    if (_.isFunction(value)) dater.fn.extend(value.call(dater));
    else dater.fn.extend(value);
});

load('./constant');
load('./method');

function load(path) {
    var extend = require(path);
    if (_.isFunction(extend)) dater.extend(extend.call(dater));
    else dater.extend(extend);
}