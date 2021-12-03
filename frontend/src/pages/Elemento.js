import React from 'react'
import axios from 'axios'
import Header from "../componentes/navbar"
import Construction from '../componentes/construction'
import Volver from "../componentes/volver"
class Elemento extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        
    }

    state = {elemento:{name: '-'}}
    endpoint = this.props.params.endpoint
    id = this.props.params.id

    componentDidMount() {
        axios.get('http://localhost:4000/api/city/'+this.id)
        .then(response => this.setState({elemento:response.data.respuesta}))
    }

    render() { 
        return (
        <div className="element">
            <Header/>
            <div className="contenedorCity">
            <img className="imagenEle" src={this.state.elemento.src} />
           <h1 className="titulociudad" >{this.state.elemento.name}</h1>
            </div>
            <div>
            <Construction/>
            </div>
            <Volver/>


        </div>)
    }
}
 
export default Elemento;
