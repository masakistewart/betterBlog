var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./controllers/routes');
var morgan = require('morgan');
var methodOverride = require('method-override');
//set ejs
app.set('view engine', 'ejs');
// method override
app.use(methodOverride('_method'));
//morgan
app.use(morgan('tiny'));
// static
app.use(express.static(__dirname + '/public'));
// bodyparser
app.use(bodyParser.urlencoded({extended: true}));
// redirect root to /blog
app.get('/', function(req, res) {
	res.redirect('/blog');
});
//set router to use routes from controller/routes.js
app.use('/blog', router);
// listen on port 3000
app.listen(3000, function() {
	console.log('server on port 3000');
});