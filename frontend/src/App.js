import{BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './pages/home'
import Cities from './pages/cities'
import ElementoSinProps from './pages/Elemento'
import {withRouter} from './utils/withRouter'
import SignUp from './pages/SignUp'
import InicioSesion from './pages/IniciarSesion'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions';
import { useEffect } from "react"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Elemento = withRouter(ElementoSinProps)

const App=(props)=>{ 
  useEffect(() => {
    if (localStorage.getItem("token")){
      props.logInLS(localStorage.getItem("token"))
    }
  }, []) 
  console.log(props)
  
  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/city/:id" element={<Elemento />} />
      {props.token ? <Route path="*" element={<Home/>}/>:<><Route path="/registro" element={<SignUp/>} />
      <Route path="/inicioSesion" element={<InicioSesion />} /></> }  
      </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     </BrowserRouter>
    
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token
  }
  
}

const mapDispatchToProps = {
  logInLS: authActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
