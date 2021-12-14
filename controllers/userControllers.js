const User = require('../models/Persona')
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
// importar jwt
const authControllers = {

    

    newUser: async(req, res) => {
        
        let {name,lastName,country, email, password,urlImage,google} = req.body      
        console.log(req.body)
        try {

            const userExists = await User.findOne({email})
            if (userExists){
                res.json({success: false, errores: [{messages:"Email already exist"}], response:null})
            }else{

                password= bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    name,
                    lastName,
                    country,
                    email, 
                    password,
                    urlImage,
                    google
                })
                //se inicializa una contante donde va residir el token que se crea con el elemento jwt importadoy el metodo sign que resive como parametro un objeto no literio y la clave secreta
                const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
                console.log(token)
                await newUser.save()
                res.json({success: true, response:{token,newUser}, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }

        
    },
    accederACuenta: async(req, res)=>{
       
    
            const { email, password, google } = req.body
            console.log(req.body)
            try {
                const usuarioExiste = await User.findOne({email})
                if (!usuarioExiste){
                    res.json({success: true, error:"The email is incorrect, please verify that it is correctly written"})
                }else{
                    let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                    if (contraseñaCoincide) {
                        console.log(usuarioExiste)
                        //se incia una contante token que utiliza jwt.sign para traer el usuario token
                        const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
                        console.log(token)
                        res.json({success:true, response:{token,email, urlImage:usuarioExiste.urlImage , name: usuarioExiste.name} ,error:null})
                    }else{
                        
                        res.json({success: true, error:"The password does not match the assigned email"})
                    }
                    if (usuarioExiste.google && !google) throw new Error ("Invalid email");
                }
    
            }catch(error){
                console.log(error);
                res.json({success: false, response: null, error: error})
            }
        
    },
    tokenVerification: (req, res) => {
        res.json({name: req.user.name, urlImage: req.user.urlImage, _id: req.user._id})
    }


}

module.exports = authControllers;