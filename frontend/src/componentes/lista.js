import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions";

 function Lista(props) {
  //filtro
  useEffect(() => {
    props.arrrayCities()
  }, []);
  console.log(props)

  const auxCities =props.auxiliar;
  const filtrar=props.filtrar

  //fecheo
  

  return (
    <div>
      <div className="barrabusqueda">
        <div>
          <label className="textbusc" for="gsearch">
            search city:
          </label>
          <input type="text" className="input" autoComplete="off" name="filtro" onChange={(evento)=>filtrar(auxCities,evento.target.value)} placeholder="Filtrar"/>
        </div>
      </div>
      <div className="fondol">
        {props.todasLasCities.length > 0 ? ( props.todasLasCities.map((citie) => {
            
            return (
              <div className="contenedor-citisl">
                <div className="img-lcity b">
                  <h3 className="f">{citie.name}</h3>
                  <img className="img-lcitis tamaño" src={citie.src} />
                  <Link
                    to={`/city/${citie._id}`}
                    className="boton relative"
                  >
                    look at itineraries
                  </Link>
                </div>
              </div>
            );
           
          })
        ) : (
          <h1 className="sinresultado">no search results</h1>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    todasLasCities: state.cityReducer.cities,
    auxiliar:state.cityReducer.copiaCities
  }
}

const mapDispatchToProps = {
  arrrayCities: citiesActions.fetchCities,
  filtrar: citiesActions.filtrar,
}


export default connect(mapStateToProps, mapDispatchToProps)(Lista)
