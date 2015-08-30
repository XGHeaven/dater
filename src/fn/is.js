// prefix `is` in here

module.exports = {
    isValid: function() {
        return this.toString() !== 'Invalid Date' && !isNaN(this.getDate());
    }
};