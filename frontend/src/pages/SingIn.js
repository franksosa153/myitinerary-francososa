import React from "react";
import IniciarSesion from "../componentes/IniciarSesion";
import Headers from "../componentes/navbar";
import Footer from '../componentes/footer'
class SignIn extends React.Component {
    render() {
  return (
    <>
      <Headers />
      <div className="contenedorRgistro">
          <h1 className="tituloRegistro">Sign In</h1>
      <IniciarSesion/>
      </div>
      <Footer/> 
    </>
  );
    }
}
export default SignIn