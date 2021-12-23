require("../config/database")
const Router = require("express").Router();
const citiesControllers=require("../controllers/citiesControllers")
const itinerarysControllers=require("../controllers/itinerarysController")
const passport = require ('../config/passport')
const validator = require('../config/validator')
const authControllers = require('../controllers/userControllers');
const activitiesControllers=require('../controllers/activitiesControllers')
const { Route } = require("express");
const{getActivitiesOfOneItinerary,addActivity }=activitiesControllers
const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad} = citiesControllers
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,borrarUnItinerario,modificarUnItinerario,likeDislikeItinerary,obtenerItinerariosCiudades,controlComment} = itinerarysControllers
const { newUser, accederACuenta,tokenVerification} = authControllers
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

Router.route('/tokenVerification')
.get(passport.authenticate("jwt" ,{session:false}),tokenVerification)

Router.route("/itinerary/like/:id")
.put(passport.authenticate("jwt", {session: false}),likeDislikeItinerary),

Router.route("/comments/:id")
.put(passport.authenticate("jwt", {session: false}),controlComment)

Router.route("/activities")
.post(addActivity)

Router.route("/activities/:itineraryId")
.get(getActivitiesOfOneItinerary);

module.exports = Router