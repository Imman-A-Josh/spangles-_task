const express = require('express');
var router = express.Router();

var users_route = require('./users/add_user');
router.post('/add_user', users_route.add_user);

router.get('/all_users', users_route.all_users);

// View Particluar Users
router.get('/view_user/:id', users_route.view_user);


// Payment Routes
var payment_route = require('./users/payments');

// Add Payments
router.post('/add_payment', payment_route.add_payment);

router.post('/all_payment', payment_route.all_payment);


// Mail Report 

var mail_route = require('./users/mail_reports');

router.post('/add_payment', mail_route.send_mail);




module.exports = router;