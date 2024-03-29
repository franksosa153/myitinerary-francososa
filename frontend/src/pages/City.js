import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";
import itinerariosActions from "../redux/actions/itinerariosActions";
import Footer from "../componentes/footer";
import Header from "../componentes/navbar";
import Volver from "../componentes/volver";
import Itinerary from '../componentes/Itinerary'
import Loading from "../componentes/Loader";





const City = (props) => {
    let { id } = useParams();
    

    useEffect(() => {
      
        window.scrollTo(0,0)
        props.fechCity(id);
        props.fechItinerarios(id);
        return ()=>{
           
         }

    }, [])
    
    if (props.arrayCity== null) {
      return <>
      <Header />
      <div className="rellenoLoading"></div>
      <div className="loading">
      <div className="headerLoading">
          <h3 className="cargando">Loading...</h3>
          </div>
        <Loading/>
   
    </div>
    </>
  }

    


    return (
        <div>
        <Header />
        <div className="contenedorCity">
          <div className="contenedorCartelCiudad">
            <img className="imagenEle" src={props.arrayCity.src} />
            <h1  className="titulociudad">{props.arrayCity.name}</h1>
          </div>
        </div>
        
        <div className="contenedorItinerarios">
          {props.Itinerarios.length !== 0 ? 
            props.Itinerarios.map((itineraries) => <Itinerary Itineraries={itineraries} ItinerariesId={itineraries._id} key={itineraries.id}/>): <h1 className="sinItinerarios">
            there are no itineraries for this city
          </h1>
               
            
          }
         
          <div className="volverAciTy">
              
 <Volver  />
          </div>
          
          
        </div><Footer />
        </div>
        
   
    );
      
}

const mapStateToProps = (state) => {
    return {
      arrayCity: state.cityReducer.city,
      Itinerarios: state.itinerariosReducer.itinerarios,
    };
  };
  
  const mapDispatchToProps = {
    fechCity: citiesActions.traerCity,
    fechItinerarios: itinerariosActions.traerItinerarios,
    
    
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(City);