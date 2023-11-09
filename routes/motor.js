var express = require('express');
const motor_controlers= require('../controllers/motor');
var router = express.Router();

/* GET costumes */
router.get('/', motor_controlers.motor_view_all_Page );
module.exports = router