const User = require('../models/Persona')
const bcryptjs = require('bcryptjs')

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
            
                await newUser.save()
                res.json({success: true, response: newUser, error: null})
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
                    res.json({success:true, response:{email} ,error:null})
                }else{
                    res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
                }
            }

        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    }


}

module.exports = authControllers;