var express = require('express');
var router = express.Router();

// Get Homepage
// Get Homepage
router.get('/', function(req, res){
	res.render('home');
});

router.get('/home', function(req, res){
	res.render('home');
});


module.exports = router;
