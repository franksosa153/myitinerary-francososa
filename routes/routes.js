require("../config/database")
const Router = require("express").Router();
const citiesControllers=require("../controllers/citiesControllers")
const itinerarysControllers=require("../controllers/itinerarysController")
const validator = require('../config/validator')
const authControllers = require('../controllers/personasControllers')
const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad} = citiesControllers
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,borrarUnItinerario,modificarUnItinerario,obtenerItinerariosCiudades} = itinerarysControllers
<<<<<<< HEAD
const { newUser, accederACuenta } = authControllers
=======
const { nuevoUsuario, accederACuenta } = authControllers
>>>>>>> b502c20ece3069757ac7c4cdb2b1d8f4e782e828
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

Router.route('/auth/signUp')
<<<<<<< HEAD
.post(validator, newUser)
=======
.post(validator, nuevoUsuario)
>>>>>>> b502c20ece3069757ac7c4cdb2b1d8f4e782e828

Router.route('/auth/signIn')
.post(accederACuenta)



module.exports = Router