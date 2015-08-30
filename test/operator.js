/**
 * Created by xgheaven on 15/6/19.
 */


var Date = require('../src');
var expect = require('chai').expect;
var date;
var dateArray = [1996, 4, 25, 10, 30, 40, 520];
var newDateArray = [2015, 9, 28, 13, 33, 25, 250];

describe('operator', function() {
    beforeEach(function() {
        date = new Date(1996, 4, 25, 10, 30 ,40, 520);
    });
    ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'].forEach(function(opr, index) {
        describe(opr + ' operator', function() {
            var d;
            beforeEach(function() {
                d = new Date(date);
            });

            it('get value', function() {
                expect(d[opr]()).to.equal(dateArray[index]);
            });
            it('+1', function() {
                d[opr]('+1');
                expect(d[opr]()).to.equal(dateArray[index] + 1);
            });
            it('-1', function() {
                d[opr](-1);
                expect(d[opr]()).to.equal(dateArray[index] - 1);
            });
            it('set value', function() {
                d[opr](newDateArray[index]);
                expect(d[opr]()).to.equal(newDateArray[index]);
            });
        });
    });
    describe('special day method', function() {
        beforeEach(function() {
            date = new Date(1996,4,25,0,0,0);
        });

        it('should be return 25', function() {
            expect(date.day()).to.equal(25);
        });

        it('invoke with number, and will be set value in', function() {
            date.day(17);
            expect(date.day()).to.equal(17);
        });

        it('if pass "-1" then meaning yesterday and etc', function() {
            date.day(-1);
            expect(date.day()).to.equal(24);
        });

        it('like last test, "+1" meaning tomorrow', function() {
            date.day("+1");
            expect(date.day()).to.equal(26);
        });

        it('if an invalid param pass in should be throw error', function() {
            expect(function() {
                date.day('abcd');
            }).to.throw(Error);
        });

        it('add time over time', function() {
            date.day('+6');
            expect(date).to.deep.equal(new Date(1996,5,1));
        });
    });
});