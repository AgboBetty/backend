const mongoose = require('mongoose');
const Schema = mongoose.Schema
let userSchema = new Schema({

    firstname:{type: String, required:true, max:100},
    surname:{type: String, required:true, max:100},
    email:{type: String, required:true, max:100},
    password:{type: String, required:true, max:100},
    birth:{type: String, required:true, max:100},
    // gender:{type: String, required:true, max:100},
    nationality:{type: String, required:true, max:100},
});

module.exports = mongoose.model('User', userSchema);