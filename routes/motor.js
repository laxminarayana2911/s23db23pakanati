var express = require('express');
const motor_controlers= require('../controllers/motor');
var router = express.Router();

/* GET costumes */
router.get('/', motor_controlers.motor_view_all_Page );
/* GET detail motor page */
router.get('/detail', motor_controlers.motor_view_one_Page);

module.exports = router