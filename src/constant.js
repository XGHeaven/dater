// tha constant of dater

module.exports  = function() {
    return {
        timezone: parseInt(this.createTime.getTimezoneOffset() / 60),
        timezoneMillisecond: this.createTime.getTimezoneOffset() * 60000,
        // default in china
        parse: this.Date.parse,

        now: this.Date.now
    };
};