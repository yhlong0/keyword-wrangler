'use strict';

var DBWrapper = require('node-dbi').DBWrapper;

var dbWrapper = new DBWrapper('sqliite3', {'path': 'database/keyword-wrangler.test.sqlite'});

dbWrapper.connect();

module.exports = dbWrapper;