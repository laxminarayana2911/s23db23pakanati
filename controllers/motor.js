var motor = require('../models/motor');
// List of all Costumes
exports.motor_list = function(req, res) {
 res.send('NOT IMPLEMENTED: motor list');
};
// for a specific Costume.
exports.motor_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: motor detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.motor_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: motor create POST');
};
// Handle Costume delete form on DELETE.
exports.motor_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: motor delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.motor_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: motor update PUT' + req.params.id);
};

// List of all Costumes
exports.costume_list = async function(req, res) {
    try{
    theCostumes = await Costume.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }