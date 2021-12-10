const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/Persona')
//se crea una nueva instancia
module.exports = passport.use(new jwtStrategy({
    //es de donde va a sacar el token desde el portador
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    //clave secreta escondida en el .env
    secretOrKey: process.env.SECRET_KEY
},(jwt_payload,done)=>{
    User.findOne({_id:jwt_payload._doc._id})
    .then(user => {
        if (user) {
            return done(null, user)
        }else{
            return done(null, false)
        }
    })
    .catch(err => {
        console.log(err)
        return done(err,false)
    })

}))
