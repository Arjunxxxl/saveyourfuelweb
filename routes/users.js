var express = require('express');
var nodemailer = require('nodemailer');
var expressValidator = require('express-validator');
var router = express.Router();

router.get('/home',function(req,res){
      res.render('home');
});

router.get('/aboutus',function(req,res){
      res.render('about');
});

router.get('/service',function(req,res){
      res.render('ser');
});


//sending mails watch liked video
router.post('/email',function(req, res){
	var query = req.body.user_query;
	var mobile= req.body.user_ph;
	var name= req.body.user_name;
  console.log(query);
	req.checkBody('name','Your name is required').notEmpty();
	req.checkBody('query','Your query is required').notEmpty();
	req.checkBody('mobile','Contact number is required').notEmpty();
	var error = req.getValidationResult().then(function(result){
    if(result.isEmpty()) {
            console.log(result.array());
            console.log("errors");
            req.flash('error_msg', 'Please fill all the fields');
            res.redirect('home');
        } else {
            console.log('Validation Ok');
            if(query==""||name==""||mobile==""){
              console.log("all are null");
              req.flash('error_msg', 'Please fill all the fields');
              res.redirect('home');
              return;
            }
            var transporter = nodemailer.createTransport({
        				service: 'gmail',
          			port: 465,
          			secure: true,
        				auth: {
      						user: 'saveyourfuel2@gmail.com',
      							pass: 'arjunsankhala'
        							}
      								});

      		var mailOptions = {
      					   from: 'saveyourfuel2@gmail.com',
      					   to: 'saveyourfuel2@gmail.com',
      					   subject: mobile+" "+name,
      					   text: "Query"+":-" +query
      					};

      			transporter.sendMail(mailOptions, function(error, info){
      			  			if (error) {
      			    						console.log(error);
                            console.log('An error orrur while sending your query');
      											req.flash('error_msg', 'An error orrur while sending your query');
      											res.render('/users/home');
      			  							} else {
      			    										console.log('Email sent: ' + info.response);
      															req.flash('success_msg', 'Your message has been successfully sent. You will recieve our response within 24 hours');

      															res.redirect('/users/home');
      			  											}
      																							});
        }
      });
});



module.exports = router;
