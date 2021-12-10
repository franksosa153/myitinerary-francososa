import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Loader from "./Loader";
import Card from 'react-bootstrap/Card'

function Lista(props) {
  //filtro
  useEffect(() => {
    props.arrayCities();
    window.scroll({
      top: 10,
      left: 100,
      behavior: 'smooth'
    });
  }, []);
  console.log(props);

  const auxCities = props.auxiliar;
  const filtrar = props.filtrar;

  //fecheo

  return (
    <div>
      <div className="barrabusqueda">
      </div>
      <div className="fondol">
        <div className="listaciudades">
        <input
            type="text"
            className="input"
            autoComplete="off"
            name="filtro"
            onChange={(evento) => filtrar(auxCities, evento.target.value)}
            placeholder="search for the desired city"
          />
        {props.todasLasCities.length > 0 ? (
          props.todasLasCities.map((city) => {
            return (
              <NavLink className="linkCards" key={city._id} to={`/city/${city._id}`}>
              <Card className="cardImg ">
              <Card.Img variant="top" className="citiesCard " src={city.src} /> 
              <Card.Body className="citiesText ">
                <Card.Text className="citiesTexto">
                  {city.name}
                </Card.Text>
              </Card.Body>
              <Card.Img/>
            </Card>
            </NavLink>        
            );
          })
        ) : (
          <h1 className="sin resultado">no search results</h1>
        )}
      </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todasLasCities: state.cityReducer.cities,
    auxiliar: state.cityReducer.copiaCities,
  };
};

const mapDispatchToProps = {
  arrayCities: citiesActions.fetchCities,
  filtrar: citiesActions.filtrar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lista);
