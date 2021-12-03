const Itinerary = require("../models/itineraris")

const itinerarysControllers = {
  
  obtenerTodasLosItinerarios: async (req,res) => {
    try {
        const itineraries = await Itinerary.find().populate('cityID')
        res.json({success: true, respuesta: itineraries})
    } catch(error) {
        console.log(error)
        res.json({success: false, respuesta: "Oops!error"})
    }
},
obtenerItinerariosCiudades: async (req,res) => {
  const cityId = (req.params.id)
  try {
      const selectedCityItineraries = await Itinerary.find({cityID: cityId})
      if (selectedCityItineraries.length != 0) {
          res.json({success: true, respuesta: selectedCityItineraries})
      } else{
      res.json({success: false, respuesta: []})
  }
  }  catch(error) {
    console.log(error)
    res.json({success: false, respuesta: "Oops!error"})
  }    
},
  cargarUnItinerario: async(req,res)=>{
    const itinerary =  req.body
    console.log(req.body)
    let respuesta
    try{

        respuesta = await new Itinerary(itinerary).save()

    }catch(error) {
      console.log(error)
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
        console.log(error)
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
      console.log(error);
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
      console.log(error);
    }
    res.json({ success: actualizado ? true : false });
  },

};

module.exports = itinerarysControllers;