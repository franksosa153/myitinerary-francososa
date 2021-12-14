import React from "react";
import Registro from "../componentes/Registro";
import Headers from "../componentes/navbar";
import Footer from '../componentes/footer'
class SingUp extends React.Component {
    render() {
  return (
    <>
      <Headers />
      <div className="contenedorRgistro">
          <h1 className="tituloRegistro">Sign Up</h1>
      <Registro />
      </div>
      <Footer/> 
    </>
  );
    }
}
export default SingUp
