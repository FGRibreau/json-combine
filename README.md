# json-combine

### Generate every possible combination of values

[![Build Status](https://img.shields.io/circleci/project/FGRibreau/json-combine.svg)](https://circleci.com/gh/FGRibreau/json-combine/) [![Deps](	https://img.shields.io/david/FGRibreau/json-combine.svg)](https://david-dm.org/FGRibreau/json-combine) [![NPM version](https://img.shields.io/npm/v/json-combine.svg)](http://badge.fury.io/js/json-combine) 

<!--[![Downloads](http://img.shields.io/npm/dm/json-combine.svg)](https://www.npmjs.com/package/json-combine) -->

[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github)  [![available-for-advisory](https://img.shields.io/badge/available%20for%20advising-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg?)


## npm

```
npm install json-combine --save
```

## usage

```js
const {flatten, combine} = require('json-combine');

// mutation to apply
const mutations = [
  {
    key: 'a.b.c',
    values:[true, false]
  },
  {
    key: 'a.b.d.e',
    values:[1, 2, 3]
  },
];

// base object
const template = {
  a:{
    b:{
      c: false,
      d:{
        e: 0
      }
    }
  }
};

console.log(combine(flatten(mutations), template));
```

Outputs an array of every possible combinations :

```js
[
 {
   "a": {
     "b": {
       "c": true,
       "d": {
         "e": 1
       }
     }
   }
 },
 {
   "a": {
     "b": {
       "c": true,
       "d": {
         "e": 2
       }
     }
   }
 },
 {
   "a": {
     "b": {
       "c": true,
       "d": {
         "e": 3
       }
     }
   }
 },
 {
   "a": {
     "b": {
       "c": false,
       "d": {
         "e": 1
       }
     }
   }
 },
 {
   "a": {
     "b": {
       "c": false,
       "d": {
         "e": 2
       }
     }
   }
 },
 {
   "a": {
     "b": {
       "c": false,
       "d": {
         "e": 3
       }
     }
   }
 }
]
```


## test

```
npm test
```
