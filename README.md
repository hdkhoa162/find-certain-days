# find-certain-days
[![Build Status](https://travis-ci.org/hdkhoa162/find-certain-days.svg?branch=master)](https://travis-ci.org/hdkhoa162/find-certain-days)

This plugin returns all the rest certain days for the given specific weekday in a whole year.

## Install
Install with npm:
```bash
npm install --save find-certain-days
```

## Usage

```javascript
// Returns all the rest certain days for the given specific weekday in the whole year.

var certainDays = require('find-certain-days');
console.log(certainDays('Friday')); // today is 2019-01-16. This week friday is on 2019-01-18
// => ['2019-01-18',
    // '2019-01-25',            
    // '2019-02-01',
    // '2019-02-08',
    // '2019-02-15',
    // '2019-02-22',
    // '2019-03-01',
    //  ....,
    //  '2019-12-27']

```

## Test

```
npm run test

```