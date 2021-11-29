require("../config/database")
const Router = require("express").Router();
const citiesControllers=require("../controllers/citiesControllers")
const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad} = citiesControllers

Router.route('/cities')
.get(obtenerTodasLasCiudades)
.post(cargarUnaCiudad) 

Router.route('/cities/:id')
.get(obtenerUnaCiudad)




module.exports = Router