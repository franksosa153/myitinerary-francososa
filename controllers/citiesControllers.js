
const City= require("../models/cities")

const citiesControllers = {

  obtenerTodasLasCiudades:(req , res)=>{
      const cities=City.find()
      .then((respuesta)=>res.json({respuesta:respuesta}))
  },
  cargarUnaCiudad: (req,res)=>{
      const {name, src , description}=req.body
      const city = new City({name, src, description}).save()
      .then((respuesta)=>res.json({respuesta}))
      
      
      
  },
 

  obtenerUnaCiudad:async(req,res)=>{
    let cities
    const id = req.params.id        
    try{
        cities = await City.findOne({_id:id})
    }catch(error){
        console.log(error)
    }
    res.json({respuesta:cities,success:true})
  
},

borrarUnaCitie:async(req,res)=>{
    const id=req.params.id
    try{
        await City.findOneAndDelete({_id:id})
        const cities=await City.find()
    }
    catch(error){
        console.log(error);
    }
    res.json({respuesta:cities})
}
}




module.exports = citiesControllers;