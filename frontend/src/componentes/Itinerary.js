import React,{useState} from "react";
import {connect} from "react-redux"
import Accordion from "react-bootstrap/Accordion";
import itinerariosActions from "../redux/actions/itinerariosActions";
const Swal = require('sweetalert2')



const Itinerary = (props) => {
    const [like, setLike] = useState(true)
    const [itinerariesLikes, setItinerariesLikes] = useState(props.Itineraries.likes)
    const heartFilled= "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
    const heartEmpty = "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
    const likeItinerary = async () => {
        setLike(false) 
        if(!props.token) {
            Swal.fire({
                icon: 'error',
                 title: 'You must be logged to like this post!'
              })  
        }else {
        let response = await props.likeDislike(props.Itineraries._id, props.token)
        setItinerariesLikes(response.data.response)
        } 
    setLike(true)
    }
    let heart = itinerariesLikes.includes(props.userId) ? "me gusta" : "no me gusta"
    console.log(props.Itineraries._id)
    return (
        <div className="itinerarioContenedor">
                    <div className="headerItinerario">
                   <img className="iconoItinerarios" src={props.Itineraries.personImage} /> 
                   <h2 className="nombreGuia" >
                          {props.Itineraries.name}
                        </h2>
                   </div>
                   <div>
                     <div className="dato2">
                        <p className="price">
                          <p className="pricio"> Price:</p>{" "}
                          {"💵".repeat(props.Itineraries.price)}
                        </p>
                        <p className="duration">duration: {props.Itineraries.duration}</p>
                      </div>
                      <div className="datos3">
                      <img src={heart} onClick={likeItinerary }/>
                        <p>{itinerariesLikes.length}</p>
                        <div className="hastag">
                          {props.Itineraries.hashtags.map((e)=>{
                            return(
                              <div className="hastags">
                              <p>{e}</p>
                              </div>
                            )
                          })}
                        </div>
                        
                      </div>
                      <div>
                          <Accordion defaultActiveKey={props.Itineraries.id}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="view">View More</Accordion.Header>
                          <Accordion.Body>
                            
                              <h1 >under construction</h1>
                            
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      </div>
                   </div>
                   </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.authReducer._id,
        token:state.authReducer.token,
    }
}
 
const mapDispatchToProps = {
    likeDislike: itinerariosActions.likeDislike
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 