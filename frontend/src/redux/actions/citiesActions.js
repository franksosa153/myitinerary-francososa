import axios from "axios"
let llego=''
const citiesActions = {

    fetchCities: () => {

        return (dispatch, getState) => {
              axios.get('http://localhost:4000/api/cities')
            .then(respuesta => dispatch({type: 'FETCHCITIES', payload: respuesta.data}),
            llego=true
            ) 
            
        }     
    },
    filtrar: (cities, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    traerCity: (id)=>{
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/city/'+id)
            .then(respuesta => dispatch({type: 'fechcity', payload: respuesta.data})) 
        }
    },
}

export default citiesActions