import React from 'react'
import axios from 'axios'
import Header from "../componentes/navbar"
import Construction from '../componentes/construction'
import Volver from "../componentes/volver"
import {connect} from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
import itinerariosActions from '../redux/actions/itinerariosActions'

class Elemento extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        
    }

    state = {elemento:{name: '-'}}
    id = this.props.params.id

    componentDidMount() {
        this.props.fechCity(this.id)
        this.props.fechItinerarios(this.id)

    }

    render() { 
        return (
        <div className="element">
            <Header/>
            <div className="contenedorCity">
            <img className="imagenEle" src={this.props.arrayCity.src} />
           <h1 className="titulociudad" >{this.props.arrayCity.name}</h1>
            </div>
            <div>
                {this.props.arrayItinerarios.map((p)=>{
                    return(
                        <div>
                            <h1>{p.name}</h1>
                            <p className="price">Price: {"💵".repeat(p.price)}</p>
                        </div>

                    );
                })}
              <Construction/>
            </div>
            <Volver/>


        </div>)
    }
}
const mapStateToProps = state => {
    return {
      arrayCity: state.cityReducer.city,
      arrayItinerarios: state.itinerariosReducer.itinerarios

    }
  }
  
  const mapDispatchToProps = {
    fechCity: citiesActions.traerCity,
    fechItinerarios: itinerariosActions.traerItinerarios
   
    
}
    
 
export default connect(mapStateToProps, mapDispatchToProps)(Elemento)
