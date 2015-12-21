// set process to equal node or development
var env = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[env];
module.exports = require('knex')(config);