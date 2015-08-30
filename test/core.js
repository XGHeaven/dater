/**
 * Created by xgheaven on 15/6/21.
 * test for core module
 * Date constructor
 */

var Date = require('../src');
var expect = require('chai').expect;
var _ = require('lodash');

describe('core module', function() {
    describe('new Date constructor', function () {
        it('without no arguments', function () {
            var date = new Date();
            expect(date).to.be.a('date');
        });

        it('pass a data object', function () {
            var date1 = new Date();
            var date2 = new Date(date1);
            // ==
            expect(date1).to.not.equal(date2);
            // ===
            expect(date1).to.deep.equal(date2);
        });

        it('pass only a two digit of year', function () {
            var date = new Date(98);
            expect(date.getFullYear()).to.equal(1998);
        });

        it('pass only a four digit of year', function () {
            var date = new Date(2015);
            expect(date.getFullYear()).to.be.equal(2015);
        });

        it('pass year,month,.... like raw Date construction', function () {
            // human month
            var date = new Date(2015, 1);
            expect(date.getFullYear()).to.be.equal(2015);
            // internal month
            expect(date.getMonth()).to.be.equal(0);
        });

        it('pass only a 9 digit number of second', function () {
            var d = new Date.Date(2015, 0);
            var date = new Date(d.getTime() / 1000);
            expect(date.getFullYear()).to.be.equal(d.getFullYear());
            expect(date.getMonth()).to.be.equal(d.getMonth());
        });

        it('pass only a 13 digit number of millisecond', function () {
            var d = new Date.Date(2015, 0);
            var date = new Date(d.getTime());
            expect(date.getFullYear()).to.be.equal(d.getFullYear());
            expect(date.getMonth()).to.be.equal(d.getMonth());
        });

        it('pass only a full string with year,month....', function () {
            ['2015', '0101', '00', '00', '00', '000'].forEach(function (value, index, array) {
                var date = new Date(array.slice(0, index + 1).join(''));
                expect(date.getFullYear()).to.be.equal(2015);
                expect(date.getMonth()).to.be.equal(0);
                expect(date.getDate()).to.be.equal(1);
            });
        });
    });

    describe('core extend', function () {
        it('Dater extend', function () {
            Date.extend({
                test: 1
            });
            expect(Date).has.ownProperty('test').and.include({test: 1});
        });

        it('Dater.fn extend', function () {
            Date.fn.extend({
                test: 1
            });
            expect(Date.Date.prototype).has.ownProperty('test').and.include({test: 1});
        });
    });

    it('isValid', function() {
        expect(new Date(2015).isValid()).to.true;
        expect(new Date(222).isValid()).to.not.true;
    });

    describe.skip('test method from new Date function,', function () {
        describe.skip('parse function', function () {
        });

        describe('time function', function () {
            it('invoke without any params should return now millisecond', function () {
                var d1 = Date.time();
                var d2 = Date.time();
                var d3 = Date.time();
                expect(d2).within(d1, d3);
            });

            it('invoke with year number should return millisecond in beginning of that year', function () {
                var d1 = Date.time(2015);
                var date = new Date(d1);

                expect(date.year()).to.equal(2015);
                expect(date.month()).to.equal(1);
                expect(date.day()).to.equal(1);
                expect(date.hour()).to.equal(0);
            });
        });
    });
});