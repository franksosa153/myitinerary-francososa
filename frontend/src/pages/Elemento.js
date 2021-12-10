import React from "react";
import Header from "../componentes/navbar";
import Volver from "../componentes/volver";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariosActions from "../redux/actions/itinerariosActions";
import Footer from "../componentes/footer";
import Accordion from "react-bootstrap/Accordion";

class Elemento extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = { elemento: { name: "-", src: "-" } };
  id = this.props.params.id;
  toTop= () => {window.scroll({
    top:0, 
    left:0,
    behavior:"smooth"
})}
  componentDidMount() {
    this.props.fechCity(this.id);
    this.props.fechItinerarios(this.id);
    this.toTop()
  }
  

  render() {
     
    return (
      <div>
        <Header />

        <div className="contenedorCity">
          <div className="contenedorCartelCiudad">
            <img className="imagenEle" src={this.props.arrayCity.src} />
            <h1 className="titulociudad">{this.props.arrayCity.name}</h1>
          </div>
        </div>
        <div className="contenedortodo">
        <div className="contenedorItinerarios">
          {this.props.arrayItinerarios.length > 0 ? (
            this.props.arrayItinerarios.map((p) => {
              return (
                <div className="contenedorItinerario">
                  <div className="cardItinerario">
                    <img className="foto-carne" src={p.personImage} />
                    <div className="datosItinerario">
                      <div className="dato1">
                        <h2 className="nombreItinerario">
                          {p.name} {p.lastName}
                        </h2>
                      </div>
                      <div className="dato2">
                        <p className="price">
                          <p className="pricio"> Price:</p>{" "}
                          {"💵".repeat(p.price)}
                        </p>
                        <p className="duration">duration: {p.duration}</p>
                      </div>
                      <div className="datos3">
                        <p className="pricio"> likes:{p.likes}</p>
                        <div className="hastag">
                          <p className="pricio">{p.hashtags.one}</p>
                          <p className="pricio">#{p.hashtags.three}</p>
                          <p className="pricio">#{p.hashtags.two}</p>
                        </div>
                      </div>
                      <Accordion defaultActiveKey={p.id}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>View More</Accordion.Header>
                          <Accordion.Body>
                            
                              <h1 >under construction</h1>
                            
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                 
                  </div> 
                  
                </div>
              );
            })
          ) : (
            <h1 className="sinItinerarios">
            there are no itineraries for this city
          </h1>
          )}
          <Volver/>
          <div className="volverAciTy">
              

          </div>
          
          
        </div><Footer />
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrayCity: state.cityReducer.city,
    arrayItinerarios: state.itinerariosReducer.itinerarios,
  };
};

const mapDispatchToProps = {
  fechCity: citiesActions.traerCity,
  fechItinerarios: itinerariosActions.traerItinerarios,
};

export default connect(mapStateToProps, mapDispatchToProps)(Elemento);
 