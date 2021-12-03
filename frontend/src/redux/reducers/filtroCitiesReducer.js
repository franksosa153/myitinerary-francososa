const initialState={
    filtar:(e)=>{
            return state.cities.filter(city => city.name.toLowerCase().startsWith(e.target.value.trim().toLowerCase())=== 0 )           
            
    }
}
const filtroRedecer=(state, action)=>{
    
}