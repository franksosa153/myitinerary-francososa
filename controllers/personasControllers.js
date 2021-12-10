const Persona = require('../models/Persona')
const bcryptjs = require('bcryptjs')

const authControllers = {

    

    nuevoUsuario: async(req, res) => {
        
        let {name,lastName,country, email, password,urlImage} = req.body      
        // tengo que hashear (hash) la contraseña y guardarla en la base de datos
        console.log(req.body)
        try {

            const usuarioExiste = await Persona.findOne({email})
            if (usuarioExiste){
                res.json({success: false, error:"El nombre de mail ya esta en uso", response:null})
            }else{

                password= bcryptjs.hashSync(password, 10)

                const nuevoUsuario = new Persona({
                    name,
                    lastName,
                    country,
                    email, 
                    password,
                    urlImage
                })
            
                await nuevoUsuario.save()
                res.json({success: true, response: nuevoUsuario, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }

        
    },
    accederACuenta: async(req, res)=>{
        const { email, password } = req.body
        console.log(req.body)
        try {

            const usuarioExiste = await Persona.findOne({email})
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