const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    name:{type:String, require:true},
    src: {type:String},
    description: {type:String},
    itinerarys:	{type: mongoose.Types.ObjectId, ref: 'itinerary', required:true},
    likes:Number,
    comment:String,
})

const City = mongoose.model('city',citiesSchema)
module.exports = City;

