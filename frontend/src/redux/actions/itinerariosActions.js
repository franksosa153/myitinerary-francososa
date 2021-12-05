import axios from "axios"

const itinerariosActions = {

    traerItinerarios: (id)=>{
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/city/itinerary/'+id)
            .then(respuesta => dispatch({type: 'fechCityItinerarios', payload: respuesta.data})) 
        }
    },
}

export default itinerariosActions