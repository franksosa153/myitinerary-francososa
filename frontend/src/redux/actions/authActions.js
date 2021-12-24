const axios = require('axios')
const Swal = require('sweetalert2')

const authActions = {

    register: (User) =>{
        return async(dispatch, getState)=>{
            try {
                
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{...User})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    localStorage.setItem('_id',user.data.response._id)
                    dispatch({type:'usuario', payload:user.data.response})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title:'You successfully registered!',
                        showConfirmButton: true,
                        timer: 1500
                      })
                }else{
                    console.error(user.data.response)
                    const error = user.data.error
                    if (user.data.error) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: error,
                            showConfirmButton: true,
                            timer: 1500
                        })}
                    
                    return { errores: user.data.errores };
                }
            }catch(error){
                
            }
        }
    },
    iniciarSesion: (userLogin) => {
        return async(dispatch, getState)=>{
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{...userLogin})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:user.data.response})
                }else{
                    
                    const error =user.data.error
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title:error,
                        showConfirmButton: true,
                        timer: 1500
                      })
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    logInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get("http://localhost:4000/api/tokenVerification", {
                headers: {
                    Authorization: "Bearer "+ token
                },
                 })
                dispatch({type: "usuario", payload: {token, name: response.data.name, urlImage: response.data.urlImage, _id: response.data._id}})
         } catch (error) {
            return dispatch ({type: "LOG_OUT"})
            } 
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Until next time, You have successfully disconnected',
                showConfirmButton: false,
                timer: 1500
              })
            dispatch({type: "LOG_OUT"})
            localStorage.removeItem("token")
            localStorage.removeItem("_id")
        }
    },

}

module.exports = authActions