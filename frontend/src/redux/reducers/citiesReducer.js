const initialState = {
    copiaCities: [],
    cities:null,
    city: null,
}

const citiesReducer=(state=initialState,action)=>{

    switch (action.type) {
        case 'FETCHCITIES':
            return {
                ...state,
                copiaCities: action.payload.respuesta,   
                cities: action.payload.respuesta           
            }
        case 'filtro':
            const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.trim().toLowerCase())))
            return {
                ...state,
                cities: filtrado
            }
        case 'fechcity':
            return {
                ...state,
                city: action.payload.respuesta,          
            }    
        default:
            return state
    }
}

export default citiesReducer;