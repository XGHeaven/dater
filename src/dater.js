/*
 * create by XGHeaven
 * Time 2015/06/20
 */

var _ = require('lodash');
var util = require('./util');
var printf = require('printf');
var debug = require('debug')('Dater:core');

// old Date constructor
var oDate = Date;

// old Date constructor instance and used inner
var createTime = new oDate();

module.exports = Dater;

function Dater(year, month, day, hour, minute, second, microsecond) {
    var args = Array.prototype.slice.call(arguments);

    if (year instanceof oDate) {
        return new oDate(year);
    }

    if (typeof year === 'number' && args.length === 1) {
        switch (year.toString().length) {
            case 2:
                // the two digit of year, default prefix is 19
                year = 1900 + year;
            case 4:
                return new Date(year, 0);
                break;
            case 10:
                // the seconds of time
                return new oDate(year * 1000);
                break;
            case 13:
                // the millisecond of time
                return new oDate(year);
                break;
            default:
                // invalid date
                return new oDate('');
                break;
        }
    }
    if (_.isString(year) && args.length === 1) {
        var date = new oDate(year);
        if (!date.isValid()) {
            date = parseDate(year);
            debug(date);
            if (!date) { return new oDate('') }
            date = new oDate(date);
        }
        return date;
    }

    // if the function isn't return until now, see the default constructor
    return new oDate(Dater.time.apply(Dater, args));
}

function parseDate(string) {
    var year, month, day, hour, minute, second, millisecond;
    // "20150401" || "201504" || etc
    if (parseInt(string.slice(0,4), 10) > 1970) {
        year = parseInt(string.slice(0,4), 10) || 1970;
        month = parseInt(string.slice(4,6), 10) || 1;
        day = parseInt(string.slice(6,8), 10) || 1;
        hour = parseInt(string.slice(8,10), 10) || 0;
        minute = parseInt(string.slice(10,12), 10) || 0;
        second = parseInt(string.slice(12, 14), 10) || 0;
        millisecond = parseInt(string.slice(14, 18), 10) || 0;
        // YYYY-MM-DDThh:mm:ss.sssZ
        return printf('%04d-%02d-%02dT%02d:%02d:%02d.%03d', year, month, day, hour, minute, second, millisecond) +
            // timezone is 反着的
            util.getSign(-Dater.timezone) +
            [util.padLeft(Math.abs(Dater.timezone)), '00'].join(':');
    }
    return false;
}


Dater.fn = oDate.prototype;
Dater.Date = oDate;
Dater.createTime = createTime;

Dater.extend = Dater.fn.extend = function() {
    _.extend.apply(null, _.union([this], arguments));
    return this;
};

// rewrite parse and UTC from Date to Dater
Dater.extend({
});