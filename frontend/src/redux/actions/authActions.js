const axios = require('axios')

const authActions = {

    registrarUsuario: (email,password, name,lastName,country,urlImage) =>{
        return async(dispatch, getState)=>{
            try {
                // eslint-disable-next-line
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{email,password,name,lastName,country,urlImage})
                if(user.data.success && !user.data.error){
                    
                    dispatch({type:'usuario', payload:{email}})
                }else{
                    // alert(user.data.error)
                    console.error(user.data.response)
                    return {errores: [{message:user.data.error}]}
                }
            }catch(error){
                
            }
        }
    },
    iniciarSesion: (email,password) => {
        return async(dispatch, getState)=>{
            try {
                console.log(email,password)
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{email, password})
                if(user.data.success && !user.data.error){
                    dispatch({type:'usuario', payload:{user:user.data.response}})
                }else{
                    alert(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    }
}

module.exports = authActions