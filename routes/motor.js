var express = require('express');
const motor_controlers= require('../controllers/motor');
var router = express.Router();

/* GET costumes */
router.get('/', motor_controlers.motor_view_all_Page );
/* GET detail motor page */
router.get('/detail', motor_controlers.motor_view_one_Page);
/* GET create costume page */
router.get('/create', motor_controlers.motor_create_Page);
/* GET create update page */
router.get('/update', motor_controlers.motor_update_Page);

module.exports = router