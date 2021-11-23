import React from 'react'
import{Link} from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="footer">
              
               <div className="barra-inf"> 
             <Link  to="/" className="link-f">Home</Link>
             <Link to="/citis" className="link-f">Citys</Link>
             <a className="link-f">sing in</a>
             <a  className="link-f">sing up</a>
             </div>
             
        </footer>
    )
}
