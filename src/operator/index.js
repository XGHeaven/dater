/**
 * Created by xgheaven on 15/6/20.
 */

var _ = require('underscore');

function changeValue(value, pattern) {
    var match = pattern.toString().match(/^([+-]?)(\d+)/);

    if (match === null) {
        throw new Error('can\'t analyse ' + pattern.toString());
    }

    var delta = match[1] === '+' ? 1 : match[1] === '-' ? -1 : 0;
    var newValue = parseInt(match[2], 10) || 0;

    if (delta) {
        return value + delta * newValue;
    } else {
        return newValue;
    }
}

module.exports.fn = {

    second: function(string) {
        if (!string) {
            return this.getSeconds();
        } else {
            this.setSeconds(changeValue(this.getSeconds(), string));
            return this;
        }
    },

    minute: function(string) {
        if (!string) {
            return this.getMinutes();
        } else {
            this.setMinutes(changeValue(this.getMinutes(), string));
            return this;
        }
    },

    hour: function(string) {
        if (!string) {
            return this.getHours();
        } else {
            this.setHours(changeValue(this.getHours(), string));
            return this;
        }
    },

    // day 1-31
    day: function(string) {
        if (!string) {
            return this.getDate();
        } else {
            this.setDate(changeValue(this.getDate(), string));
            return this;
        }
    },

    // month 0-11
    month: function(string) {
        if (!string) {
            return this.getMonth()+1;
        } else {
            this.setMonth(changeValue(this.getMonth()+1, string) -1 );
        }
    },

    year: function(string) {
        if (!string) {
            return this.getFullYear();
        } else {
            this.setFullYear(changeValue(this.getFullYear(), string));
            return this;
        }
    }
};

