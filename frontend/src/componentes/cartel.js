import React from 'react'
import{Link} from 'react-router-dom'

const Cartel = () => {
    return (
        <div className="cartel-cuerpo">
                    <h2 className="subtitulo">My Tinerary</h2>
                    <div>
                        <p className="p-cartel">Find your perfect trip, designed<br></br> by insiders
                        who know and love their cities!</p>
                    </div>
                    <div className="boton-cont">                      
                       <Link to="/citis" className="boton">Choose destination now!</Link>
                    </div>
                </div>
    )
}

export default Cartel
