const initialState = {
   itinerarios: [],
   actividades:[]
   
}

const itinerariosReducer=(state=initialState,action)=>{

   switch (action.type) {
       case 'fechCityItinerarios':
           return {
               ...state,
               itinerarios: action.payload.respuesta,          
           }
           case 'fechActividades':
           return {
               ...state,
               actividades: action.payload.respuesta,          
           }    
       default:
           return state
   }
}

export default itinerariosReducer;