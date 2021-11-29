    
import React,{useState, useEffect} from "react"
import{Link} from 'react-router-dom'

export default function Lista(props) {
    const [cities, setCities]=useState([])
    const ciudades=props.ciudades
    const [busqueda, setBusqueda]=useState("")
    const handleChange=e=>{
        setBusqueda(e.target.value)
    }
    useEffect(()=>{filtrar("")},[ciudades])
    useEffect(() => {filtrar(busqueda)},[busqueda])
const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=cities.filter((elemento)=>{
        if (elemento.name.toString().toLowerCase().startsWith(terminoBusqueda.trim().toLowerCase()))
        {
            return elemento
        }
    });
    setCities(resultadosBusqueda)
}


useEffect(()=>{
    fecheo()
},[])
 async function fecheo(){
 try{  let respuesta=await fetch("http://localhost:4000/api/cities")
    let data=await respuesta.json()
    setCities(data.respuesta)}catch(err){console.log(err);}
    
}


    return (
    

        <div>
            <div className="barrabusqueda">
                <div>
                    <label className="textbusc" for="gsearch">search city:</label>
                    <input className="buscador" value={busqueda} onChange={handleChange} placeholder="explore" type="search" id="gsearch" name="gsearch"></input>
                </div>
            </div>
            <div className="fondol">
             {cities.length > 0 ? cities.map(citie=>{
                 const endpoint ="cities"
                return(
                    <div className="contenedor-citisl">
                            <div className="img-lcity b" >
                                <h3 className="f">{citie.name}</h3>
                                <img className="img-lcitis tamaño" src={citie.src}/>  
                                <Link to={`/${endpoint}/${citie._id}`} className="boton relative" >look at itineraries</Link>
                            </div>                        
                    </div>
                ) 
                 }):<h1></h1>
            }
            </div>           
        </div>
   )
                
            
            
        
    
}
