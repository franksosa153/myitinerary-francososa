require("../config/database")
const Router = require("express").Router();
const citiesControllers=require("../controllers/citiesControllers")
const itinerarysControllers=require("../controllers/itinerarysController")
const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad} = citiesControllers
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,borrarUnItinerario,modificarUnItinerario,obtenerItinerariosCiudades} = itinerarysControllers

Router.route('/cities')
.get(obtenerTodasLasCiudades)
.post(cargarUnaCiudad) 

Router.route('/city/:id')
.get(obtenerUnaCiudad)
Router.route('/city/itinerary/:id')
.get(obtenerItinerariosCiudades)
Router.route('/itinerarys')
.get(obtenerTodasLosItinerarios)
.post(cargarUnItinerario)
Router.route('/itinerary/:id')
.get(obtenerUnItinerario)




module.exports = Router