import axios from "axios"

const itinerariosActions = {

    traerItinerarios: (id)=>{
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/city/itinerary/'+id)
            .then(respuesta => dispatch({type: 'fechCityItinerarios', payload: respuesta.data})) 
        }
    },
    likeDislike: (itineraryId, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/like/${itineraryId}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                return response
                
            }catch (error) {
                
            }
        }
    }
}

export default itinerariosActions