import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'
import {useRef} from 'react'
import { NavLink } from "react-router-dom"

const IniciarSesion = (props)=>{
    const inputEmail = useRef()
    const inputContraseña = useRef()

    const handleSubmit = async (email, password )=>{
       props.iniciarSesion(email,password)
        
    }
    const handleSubmitInputs = (e)=>{
        e.preventDefault()
        handleSubmit(inputEmail.current.value, inputContraseña.current.value)
       inputEmail.current.value = ''
        inputContraseña.current.value = ''
    }
    console.log(props)

    return (
        <div className="container-formulario">
            <h2>Join to our World of Adventures!</h2>
            <h4>Already have an account?<NavLink exact to="/login"> Log in!</NavLink></h4>
            <main className="main-formulario">
            <form onSubmit={handleSubmitInputs}>             
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Mail
                        <input className='inputsForm' type="email" ref={inputEmail} name="name"/>
                    </label>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Password
                        <input className='inputsForm' type="text" ref={inputContraseña} name="name"/>
                    </label>
                    <input type="submit" value="Enviar"/>
                </form>
                
            </main>
        </div>
    )
}

    
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario
    }
 }
 const mapDispatchToProps = {
    iniciarSesion: authActions.iniciarSesion
 }

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion)