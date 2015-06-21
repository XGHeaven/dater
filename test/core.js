/**
 * Created by xgheaven on 15/6/21.
 * test for core module
 * Date constructor
 */

var Date = require('../src');
var expect = require('chai').expect;
var _ = require('underscore');

describe('test method from new Date function,', function() {
    describe.skip('parse function', function() {
    });

    describe('time function', function() {
        it('invoke without any params should return now millisecond', function() {
            var d1 = Date.time();
            var d2 = Date.time();
            var d3 = Date.time();
            expect(d2).within(d1, d3);
        });

        it('invoke with year number should return millisecond in beginning of that year', function() {
            var d1 = Date.time(2015);
            var date = new Date(d1);

            expect(date.year()).to.equal(2015);
            expect(date.month()).to.equal(1);
            expect(date.day()).to.equal(1);
            expect(date.hour()).to.equal(0);
        });
    });
});

describe('test new Date constructor', function() {
    it('instance it like raw Date constructor', function() {
        var date = new Date();
        expect(date).to.be.a('date');
    });

    it('if pass a Date object, should be clone it to a new Date object', function() {
        var date1 = new Date();
        var date2 = new Date(date1);

        // ==
        expect(date1).to.not.equal(date2);
        // ===
        expect(date1).to.deep.equal(date2);
    });

    it('if pass a numbers, like raw Date, need 7 number, if other number is undefined, default is 0', function() {
        var date = new Date(2015);
        expect(date).to.deep.equal(new Date.Date(2015,0,1,0,0,0));
    });

});