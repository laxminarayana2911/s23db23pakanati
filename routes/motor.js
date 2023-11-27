var express = require('express');
const motor_controlers= require('../controllers/motor');
var router = express.Router();
var passport = require('passport');

/* GET costumes */
router.get('/', motor_controlers.motor_view_all_Page );
/* GET detail motor page */
router.get('/detail', motor_controlers.motor_view_one_Page);
/* GET create motor page */
router.get('/create', motor_controlers.motor_create_Page);
/* GET create update page */
//router.get('/update', motor_controlers.motor_update_Page);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET update costume page */
router.get('/update', secured,
motor_controlers.motor_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
res.redirect('/');
});

/* GET delete motor page */
router.get('/delete', motor_controlers.motor_delete_Page);

module.exports = router