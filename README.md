# Dater
---
This is a library for date in javascript. You can use it like raw Date build in javascript.
Even, you can use this to replace raw Date.
```
var Date = require('dater');
```

# API
---
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

# Thinks