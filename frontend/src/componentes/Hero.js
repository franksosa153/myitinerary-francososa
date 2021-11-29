import React from 'react'
import{Link} from 'react-router-dom'

const Cartel = () => {
    return (
        <div className="cuerpo-hero">
            <main className="cuerpo">  
            
            <div className="cartel-cuerpo">
                <h2 className="subtitulo">My Tinerary</h2>
                <div>
                    <div className="p-cartel"> 
                        <p className="p-hero-uno">The world is like a book</p>
                        <p className="p-hero-dos">and</p>
                        <p className="p-hero-tres">  those who do not travel only read one page</p> .
                    </div>
                </div>
                <div className="boton-cont">                      
                    <Link to="/cities" className="boton">Choose destination now!</Link>
                </div>
            </div>
       </main> 
        </div>
    )
}

export default Cartel
