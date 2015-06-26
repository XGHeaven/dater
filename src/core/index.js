/*
 * create by XGHeaven
 * Time 2015/06/20
 */

var _ = require('underscore');

// old Date constructor
var oDate = Date;

// old Date constructor instance and used inner
var createTime = new oDate();

module.exports = Dater;

function Dater(year, month, day, hour, minute, second, microsecond) {
    var argv = Array.prototype.slice.call(arguments);

    if (_.isDate(year)) {
        return new oDate(year);
    } else if (_.isNumber(year)) {
        switch (year.toString().length) {
            case 2:
                // the two digit of year, default prefix is 19
                year = 1900 + year;
                break;
            case 9:
                // the seconds of time
                return new oDate(year * 1000);
                break;
            case 13:
                // the millisecond of time
                return new oDate(year);
                break;
            default:
                break;
        }
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
    }

    // if the function isn't return until now, see the default constructor
    return new oDate(Dater.time.apply(Dater, argv));
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


Dater.fn = oDate.prototype;
Dater.Date = oDate;
Dater.createTime = createTime;

Dater.extend = Dater.fn.extend = function() {
    _.extend.apply(null, _.union([this], arguments));
    return this;
};

Dater.fn.extend({
    isValid: function() {
        return this.toString() !== 'Invalid Date' && !isNaN(this.getDate());
    }
});

// rewrite parse and UTC from Date to Dater
Dater.extend({
    timezone: createTime.getTimezoneOffset(),
    // default in china
    parse: oDate.parse,

    now: oDate.now,

    UTC: function() {
        var argc = arguments.length;
        var argv = Array.prototype.slice.call(arguments);

        if (argc === 0) {
            return this.now();
        } else if (argc === 1) {
            argv.push(0);
        } else {
            // recover javascript build in month range from (1,12) to (0,11)
            argv[1] -= 1;
        }

        return oDate.UTC.apply(null, argv);
    },

    // like UTC function ,but this return depend on local time
    time: function() {
        if (arguments.length === 0) {
            // if invoke without any argument return now timestamp
            return this.now();
        } else {
            return this.UTC.apply(this, arguments) - this.timezoneMilliSecond;
        }
    }
});