// main dater file

//var _ = require('utils')._;
var _ = require('underscore');

var core = require('./core');
module.exports = core;

// like day(), month(), etc...
load('./operator');

function load(path) {
    var funcs = require(path);
    if (funcs.fn) {
        core.fn.extend(funcs.fn);
    }
    core.extend(_.omit(funcs, function(value, key, object) {
        return key === 'fn';
    }))/**/;
}