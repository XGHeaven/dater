// global method

module.exports = {
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

        return this.Date.UTC.apply(this, argv);
    },

    // like UTC function ,but this return depend on local time
    time: function() {
        if (arguments.length === 0) {
            // if invoke without any argument return now timestamp
            return this.now();
        } else {
            return this.UTC.apply(this, arguments) + this.timezoneMillisecond;
        }
    }
};