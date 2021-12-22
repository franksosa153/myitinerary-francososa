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
    },
    addComment: (itineraryId, comment, token,urlImage) => {

        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {comment,urlImage,itineraryId, type: "addComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }     
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    },
    deleteComment: (itineraryId, commentId, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "deleteComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    }, 

    editComment: (commentId, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${commentId}`, { comment, type: "editComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false,response: error
                }
            }
        }    
    }, 
}

export default itinerariosActions