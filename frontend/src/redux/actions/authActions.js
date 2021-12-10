const axios = require('axios')

const authActions = {

    register: (email,password, name,lastName,country,urlImage) =>{
        return async(dispatch, getState)=>{
            try {
                // eslint-disable-next-line
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{email,password,name,lastName,country,urlImage})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'user', payload:{email}})
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
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{email, password})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:user.data.response})
                }else{
                    console.log(user.data)
                    // alert(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    loginForzadoPorLocalS:(userLS) => {
        
        return async (dispatch , getState) =>{
            try{
                const respuesta = await axios.get ('https://localhost:4000/api/user/loginLS',{
                    headers:{
                        'Authorization': 'Bearer ' + userLS.token
            
                    }
                })
                dispatch({type:'user', payload:{
                    ...respuesta.data.respuesta,
                    token: userLS.token
                }})
            }
               
            catch(err) {                
               
                }
        }
    }
}

module.exports = authActions