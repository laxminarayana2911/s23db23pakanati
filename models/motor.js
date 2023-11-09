const mongoose = require("mongoose")
const motorSchema = mongoose.Schema({
    motor_name: String,
    motor_model: String,
    motor_price: Number
})
module.exports = mongoose.model("motor", 
motorSchema)