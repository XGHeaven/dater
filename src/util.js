var _ = require('lodash');

function padLeft(string, length, fill) {
    length = parseInt(length, 10) || 2;
    fill = fill || '0';
    return _.padLeft(string, length, fill);
}
exports.padLeft = padLeft;

exports.padLeftCallback = function(length, fill) {
    length = parseInt(length, 10) || 2;
    fill = fill || '0';
    return function(string) {
        return padLeft(string, length, fill);
    }
};

exports.getSign = function(number) {
    if (number >= 0) return '+';
    return '-';
};