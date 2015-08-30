# Dater
[![Build Status](https://travis-ci.org/XGHeaven/dater.svg?branch=develop)](https://travis-ci.org/XGHeaven/dater)
[![Coverage Status](https://coveralls.io/repos/XGHeaven/dater/badge.svg?branch=develop&service=github)](https://coveralls.io/github/XGHeaven/dater?branch=master)
[![NPM](https://nodei.co/npm/dater.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dater/)

This is a library for date in javascript. You can use it like raw Date build in javascript.
Even, you can use this to replace raw Date.
```
var Date = require('dater');
```

# API

- microsecond
- second
- minute
- hour
- day
- month
- year

usage:
```
var Date = require('dater');
var date = new Date();

date.day(); // get day
date.day(2); // set day
date.day(-1); // change to yeaterday.
date.day('+1'); // change to tomorrow
// others alse like this
// usage like jQuery api
```

# Update
- 0\.1\.1
    - add some test
    - update some file
    - fix some bugs
