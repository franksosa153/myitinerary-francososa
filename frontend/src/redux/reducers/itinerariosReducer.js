const initialState = {
   itinerarios: [],
   
}

const itinerariosReducer=(state=initialState,action)=>{

   switch (action.type) {
       case 'fechCityItinerarios':
           return {
               ...state,
               itinerarios: action.payload.respuesta,          
           }    
       default:
           return state
   }
}

export default itinerariosReducer;