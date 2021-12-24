
const initialState = {
    token: null, name: null, urlImage: null, _id: null,
    errores:null
}

const authReducer = (state = initialState, action)=>{

    switch(action.type){
       case 'usuario':
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("_id", action.payload._id)
        return {
            token: action.payload.token, 
            name: action.payload.name,
            urlImage: action.payload.urlImage,
            _id: action.payload._id
        }
        case'LOG_OUT':
        return{
            ...state,
            token:null,
            name:null,
            urlImage:null,
            _id:null,
            
        }
    
        default:
            return state
    }


}
export default authReducer