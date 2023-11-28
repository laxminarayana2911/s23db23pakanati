const mongoose = require("mongoose")
const motorSchema = mongoose.Schema({
    motor_name: String,
    motor_model: String,
    motor_price: {
        type: Number,
        min: [0, 'The motor price must be greater than or equal to 0'], // Minimum value and custom error message
        max: [50000, 'The motor price cannot exceed 50000'], // Maximum value and custom error message
        required: [true, 'Motor price is required'] // Ensuring the field is required
    }
})
module.exports = mongoose.model("motor", 
motorSchema)