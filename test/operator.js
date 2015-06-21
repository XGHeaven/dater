/**
 * Created by xgheaven on 15/6/19.
 */


var Date = require('../src');
var expect = require('chai').expect;
var date;

describe('test operator', function() {
    describe('in day method', function() {
        beforeEach('init in 1996/4/25', function() {
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