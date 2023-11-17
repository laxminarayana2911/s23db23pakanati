// models/account.js

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const accountSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Plugin passport-local-mongoose to enable additional authentication functionality
accountSchema.plugin(passportLocalMongoose);

// Export the model
module.exports = mongoose.model('Account', accountSchema);