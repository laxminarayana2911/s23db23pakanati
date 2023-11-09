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
exports.motor_list = async function(req, res) {
    try{
    theMotor = await motor.find();
    res.send(theMotor);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

   // VIEWS
// Handle a show all view
exports.motor_view_all_Page = async function(req, res) {
    try{
    themotor = await motor.find();
    res.render('motor', { title: 'Motor Search Results', results: themotor });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // Handle Costume create on POST.
exports.motor_create_post = async function(req, res) {
 console.log(req.body)
 let document = new motor();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.motor_name = req.body.motor_name;
 document.motor_model = req.body.motor_model;
 document.motor_price = req.body.motor_price;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
}