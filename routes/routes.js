require("../config/database")
const Router = require("express").Router();
const citiesControllers=require("../controllers/citiesControllers")
const itinerarysControllers=require("../controllers/itinerarysController")
const validator = require('../config/validator')
const authControllers = require('../controllers/personasControllers');
const { Route } = require("express");
const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad} = citiesControllers
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,borrarUnItinerario,modificarUnItinerario,obtenerItinerariosCiudades} = itinerarysControllers
const { newUser, accederACuenta } = authControllers
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
.post(validator, newUser)

Router.route('/auth/signIn')
.post(accederACuenta)



module.exports = Router