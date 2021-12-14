import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'
import {useRef} from 'react'
import { NavLink } from "react-router-dom"
import Headers from '../componentes/navbar'
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'


const IniciarSesion = (props)=>{
    const responseGoogle = (res) => {
        console.log(res);
        let googleUser = {
          email: res.profileObj.email,
          password: res.profileObj.googleId,
          google: true,
        };
        props
          .iniciarSesion(googleUser)
      };
    const inputEmail = useRef()
    const inputContraseña = useRef()
    const handleSubmit = async (user) => {
        const errores = await props.iniciarSesion(user);
        console.log(errores);
        
      };
      const handleSubmitInputs = (e) => {
        e.preventDefault();
        const user = {
          email: inputEmail.current.value,
          password: inputContraseña.current.value,

        }
        handleSubmit(user);
    inputEmail.current.value = "";
    inputContraseña.current.value = "";


  };

    return (
        <> 
        
        <div className="container-formulario-in">
            
            <h2 className='subtituloR'>Join to our World of Adventures!</h2>
            <h4 className='subtituloR'>You do not have an account?<NavLink exact to="/registro"> sign up!</NavLink></h4>
            <main className="main-formulario-in">
            <form onSubmit={handleSubmitInputs}>             
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Mail
                        <input className='inputsForm ' type="email" ref={inputEmail} name="name"/>
                    </label>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Password
                        <input className='inputsForm' type="text" ref={inputContraseña} name="name"/>
                    </label>
                    <div className='ajustarEnvio'>
                    <input className='inputsForm labelFormulario enviar ' type="submit" value="Enviar"/>
                    </div>
                     <h1 className='or'>Or </h1>
                      <GoogleLogin
            className='estilosGOOgle'
    clientId="477764676540-drivpqs59urt1ltdeddemqs1l9jhmu0t.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
                </form>
                
                
            </main>
         
        </div>

        </>
    )
}

    
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario,
        errores: state.authReducer.errores
    }
 }
 const mapDispatchToProps = {
    iniciarSesion: authActions.iniciarSesion
 }

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion)