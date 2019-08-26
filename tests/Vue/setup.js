// setup.js
require('jsdom-global')();
global.expect = require('expect');
window.Date = Date; // bug fix check vue-test-utils fixes #936

global.expect = require('expect')
global.axios = require('axios');
global.Vue = require('vue');
global.bus = new Vue();
