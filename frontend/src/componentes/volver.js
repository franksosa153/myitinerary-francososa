import React from 'react'
import{Link} from 'react-router-dom'

export default function Volver() {
    return (
        <div>
           <Link className="boton ajuste" to="/cities" >back to cities</Link> 
        </div>
    )
}
