const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
        name:{type:String, required:true},
        lastName:{type:String, required:true},
        country:{type:String, requiere:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        urlImage:String,
        google: {type: Boolean, default: false} 
})

const User= mongoose.model('persona', personaSchema)

module.exports = User;