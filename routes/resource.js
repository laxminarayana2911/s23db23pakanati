var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var motor_controller = require('../controllers/motor');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/motor', motor_controller.motor_create_post);
// DELETE request to delete Costume.
router.delete('/motor/:id', motor_controller.motor_delete);
// PUT request to update Costume.
router.put('/motor/:id', motor_controller.motor_update_put);
// GET request for one Costume.
router.get('/motor/:id', motor_controller.motor_detail);
// GET request for list of all Costume items.
router.get('/motor', motor_controller.motor_list);
module.exports = router;