var motor = require('../models/motor');
// List of all motor
exports.motor_list = function(req, res) {
 res.send('NOT IMPLEMENTED: motor list');
};
// for a specific motor.
exports.motor_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: motor detail: ' + req.params.id);
};
// for a specific eagle.
exports.motor_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await motor.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle motor create on POST.
exports.motor_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: motor create POST');
};
// Handle motor delete form on DELETE.
exports.motor_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: motor delete DELETE ' + req.params.id);
};
// Handle motor update form on PUT.
// exports.motor_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: motor update PUT' + req.params.id);
// };

    

// List of all motor
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

   // Handle motor create on POST.
exports.motor_create_post = async function(req, res) {
 console.log(req.body)
 let document = new motor();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
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

// Handle eagle update form on PUT.

exports.motor_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await motor.findById( req.params.id)
    // Do updates of properties
    if(req.body.motor_name)
    toUpdate.motor_name = req.body.motor_name;
    if(req.body.motor_model) toUpdate.motor_model = req.body.motor_model;
    if(req.body.motor_price) toUpdate.motor_price = req.body.motor_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// Handle Costume delete on DELETE.
exports.motor_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await motor.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.motor_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await motor.findById( req.query.id)
    res.render('motordetail', 
   { title: 'motor Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.motor_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('motorcreate', { title: 'Motor Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a costume.
// query provides the id
exports.motor_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await motor.findById(req.query.id)
    res.render('motorupdate', { title: 'motor Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.motor_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await motor.findById(req.query.id)
    res.render('motordelete', { title: 'Motor Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };