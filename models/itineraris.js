const mongoose = require('mongoose');

const itinerarysSchema = new mongoose.Schema({
    name:{type:String, required: true},
    lastName:{type:String, required: true},
    personImage:{type:String, required: true},
    price:{ type:Number, required: true },
    duration:{ type:String, required: true },
    hashtags:{
        one:String,
        two:String,
        three:String
    },
    cityID:	[{type: mongoose.Types.ObjectId, ref: 'city', required:true}],
    likes:Number,
    comment:String,

})

const Itinerary = mongoose.model('itinerary',itinerarysSchema)
module.exports = Itinerary;