const User = require('../models/Persona')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
// importar jwt
const authControllers = {

    

    newUser: async(req, res) => {
        
        let {name,lastName,country, email, password,urlImage} = req.body      
        console.log(req.body)
        try {

            const userExists = await User.findOne({email})
            if (userExists){
                res.json({success: false, error:"The email name is already in use", response:null})
            }else{

                password= bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    name,
                    lastName,
                    country,
                    email, 
                    password,
                    urlImage
                })
                //se inicializa una contante donde va residir el token que se crea con el elemento jwt importadoy el metodo sign que resive como parametro un objeto no literio y la clave secreta
                const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
                await newUser.save()
                res.json({success: true, response:{token,newUser}, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }

        
    },
    accederACuenta: async(req, res)=>{
        const { email, password } = req.body
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({email})
            if (!usuarioExiste){
                res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    console.log(usuarioExiste)
                    //se incia una contante token que utiliza jwt.sign para traer el usuario token
                    const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
                    console.log(token)
                    res.json({success:true, response:{token,email, urlImage:usuarioExiste.urlImage , name: usuarioExiste.name} ,error:null})
                }else{
                    res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
                }
            }

        }catch(error){
            console.log(error);
            res.json({success: false, response: null, error: error})
        }
    },
    loginForzado:(req,res) => {
        res.json({success:true , respuesta: {urlImage: req.user.urlImage , name: req.user.name}})
    } 


}

module.exports = authControllers;