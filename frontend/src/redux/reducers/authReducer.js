
const initialState = {
    usuario:null,
}

const authReducer = (state = initialState, action)=>{

    switch(action.type){
       case 'usuario':
        if(action.payload){
            localStorage.setItem('usuario', JSON.stringify({name:action.payload.name, urlImage: action.payload.urlImage}))
            localStorage.setItem('token',action.payload.token)
        }
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }


}
export default authReducer