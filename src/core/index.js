/*
 * create by XGHeaven
 * Time 2015/06/20
 */

var _ = require('underscore');
var oDate = Date;

module.exports = Dater;

function Dater(year, month, day, hour, minute, second, microsecond) {
    if (typeof year === 'number' || !year) {
        return new oDate(Date.apply(null, arguments));
    } else if (_.isString(year)) {
        var date = new oDate(year);
        if (!date.isValid()) {
            date = parseDate(year);
            if (!date) {
                throw TypeError('can\' resolve date string ' + year);
            } else {
                return new Date(date);
            }
        } else {
            return date;
        }
    } else {
        throw TypeError('the first argument must be string or number');
    }
}

function parseDate(string) {
    var year, month, day, hour, minute, second, microsecond;
    // "20150401" || "201504" || etc
    if (parseInt(string.slice(0,4), 10) > 1970) {
        year = parseInt(string.slice(0,4), 10) || 1970;
        month = parseInt(string.slice(4,6), 10) || 0;
        day = parseInt(string.slice(6,8), 10) || 0;
        hour = parseInt(string.slice(8,10), 10) || 0;
        minute = parseInt(string.slice(10,12), 10) || 0;
        second = parseInt(string.slice(12, 14), 10) || 0;
        microsecond = parseInt(string.slice(14, 18), 10) || 0;
        return [year,month,day].join(',') + ' ' + [hour,minute,second,microsecond].join(':');
    }
    return false;
}


Dater.fn = Date.prototype;
Dater.Date = oDate;

Dater.extend = Dater.fn.extend = function() {
    _.extend.apply(null, _.union([this], arguments));
    return this;
};

Dater.fn.extend({
    isValid: function() {
        return this.toString() !== 'Invalid Date' && !isNaN(this.getDate());
    }
});
