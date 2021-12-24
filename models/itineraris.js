const mongoose = require('mongoose');

const itinerarysSchema = new mongoose.Schema({
    itineraryTitle: {type: String, required: true},
    name:{type:String, required: true},
    personImage:{type:String, required: true},
    price:{ type:Number, required: true },
    duration:{ type:String, required: true },
    hashtags: {type: Array, required: true},
    cityID:	{type: mongoose.Types.ObjectId, ref: 'city', required:true},
    likes:{type:Array},
    comments:  [{
        comment: {type: String},
        userId: {type: mongoose.Types.ObjectId, ref: "persona"},
        urlImage: {type: String},
        itineraryId: {type: String},
        name: {type: String},
        user:{type: String}
    }],

})

const Itinerary = mongoose.model('itinerary',itinerarysSchema)
module.exports = Itinerary;