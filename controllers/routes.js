var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
require('locus');

// for index / aka /blog
router.get('/',function(req,res) { 
  knex('posts').then(function(data) {
  	res.locals.things = data;
  	console.log(data)
  	res.render('pages/index');
  });
});

router.get('/new',function(req,res) { 
  res.render('pages/new');
});

router.post('/',function(req,res) {
  knex('posts').insert(req.body).then(function() {
  	res.redirect('/');
  });
});

module.exports = router;

