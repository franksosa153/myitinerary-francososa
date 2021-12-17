const Itinerary = require("../models/itineraris")

const itinerarysControllers = {
  
  obtenerTodasLosItinerarios: async (req,res) => {
    try {
        const itineraries = await Itinerary.find().populate('cityID')
        res.json({success: true, respuesta: itineraries})
    } catch(error) {
        
        res.json({success: false, respuesta: "Oops!error"})
    }
},
obtenerItinerariosCiudades: async (req,res) => {
  const cityId = (req.params.id)
  try {
      const selectedCityItineraries = await Itinerary.find({cityID: cityId})
      if (selectedCityItineraries.length != 0) {
          res.json({success: true, respuesta:selectedCityItineraries})
      } else{
      res.json({success: false, respuesta: []})
  }
  }  catch(error) {
    
    res.json({success: false, respuesta: "Oops!error"})
  }    
},
  cargarUnItinerario: async(req,res)=>{
    const itinerary =  req.body
    
    let respuesta
    try{

        respuesta = await new Itinerary(itinerary).save()

    }catch(error) {
      
      res.json({success: false, respuesta: "Oops!error"})
  }
    res.json(respuesta)
},

  obtenerUnItinerario: async (req, res) => {
    let itinerarys;
    const id = req.params.id;
    try {
        itinerarys = await Itinerary.findOne({ _id: id }).populate("id")
      }catch(error) {
        
        res.json({success: false, respuesta: "Oops!error"})
    }
    res.json({ respuesta: itinerarys, success: true });
  },

  borrarUnItinerario: async (req, res) => {
    const id = req.params.id;
    try {
      await Itinerary.findOneAndDelete({ _id: id });
      const itinerarys = await Itinerary.find();
    } catch (error) {
     
    }
    res.json({ respuesta: itinerarys});
  },
  modificarUnItinerario: async (req, res) => {
    let id = req.params.id;
    let  = req.body;
    let actualizado;
    try {
      actualizado = await Itinerary.findOneAndUpdate({ _id: id }, cities, {
        new: true,
      });
    } catch (error) {
      
    }
    res.json({ success: actualizado ? true : false });
  },
  likeDislikeItinerary:(req,res) =>{
    Itinerary.findOne({_id: req.params.id})
    .then((itinerary) =>{
        if(itinerary.likes.includes(req.user._id)){
           Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
           .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
           .catch((error) => console.log(error))
        }else{
            Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
            .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
            .catch((error) => console.log(error))
        }
    })
    .catch((error) => res.json({success:false, response:error}))
},

};

module.exports = itinerarysControllers;