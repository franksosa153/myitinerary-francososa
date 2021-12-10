import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'
import {useRef} from 'react'
import { NavLink } from "react-router-dom"
const countries = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "Chad",
    "Chile",
    "China",
    "Chipre",
    "Ciudad del Vaticano",
    "Colombia",
    "Comoras",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guyana",
    "Guinea",
    "Guinea ecuatorial",
    "Guinea-Bisáu",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Islas Marshall",
    "Islas Salomón",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Palestina",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Centroafricana",
    "República Checa",
    "República de Macedonia",
    "República del Congo",
    "República Democrática del Congo",
    "República Dominicana",
    "República Sudafricana",
    "Ruanda",
    "Rumanía",
    "Rusia",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "San Vicente y las Granadinas",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];

const Registro = (props)=>{
    const inputEmail = useRef()
    const inputContraseña = useRef()
    const inputName = useRef()
    const inputLastName = useRef()
    const inputCountry=useRef()
    const inputUrlImage=useRef()
    const handleSubmit = async (country,name,lastName,email, password,urlImage )=>{
        const errores = await props.registrarUsuario(country,name,lastName,email, password,urlImage )
        console.log(errores)
       
        
    }
    const handleSubmitInputs = (e)=>{
        e.preventDefault()
        handleSubmit(inputEmail.current.value, inputContraseña.current.value,inputName.current.value,  inputLastName.current.value,inputCountry.current.value, inputUrlImage.current.value)
       inputName.current.value='' 
       inputLastName.current.value=''
       inputCountry.current.value=''
       inputEmail.current.value = ''
        inputContraseña.current.value = ''
        inputUrlImage.current.value=''
        
        
        
    }

    return (
        <div className="container-formulario">
            
            <h2>Join to our World of Adventures!</h2>
            <h4>Already have an account?<NavLink exact to="/login"> Log in!</NavLink></h4>
            <main className="main-formulario">
            <form onSubmit={handleSubmitInputs}>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Name
                        <input className='inputsForm' type="text" ref={inputName} />
                    </label>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>LastName
                        <input className='inputsForm' type="text" ref={inputLastName} placeholder='put your last name' />
                    </label>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Url Image
                        <input className='inputsForm' type="text"  ref={inputUrlImage}/>
                    </label>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Country
                    <select ref={inputCountry} name="select">
                        <option  disabled value="" selected>Choose your Country</option>
                        {countries.map((country)=>{
                            return(
                                <option  value={country}>{country}</option>
                            )
                        })}
                    </select>
                    </label>
                    
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Mail
                        <input className='inputsForm' type="email" ref={inputEmail} name="name"/>
                    </label>
                    <label className='labelFormulario' style={{display: 'flex',flexDirection: 'column'}}>Password
                        <input className='inputsForm' type="text" ref={inputContraseña} name="name"/>
                    </label>
                    
                    <input type="submit" value="Enviar"/>
                </form>
                
            </main>
        </div>
    )
}

    
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario
    }
 }
 const mapDispatchToProps = {
    registrarUsuario: authActions.registrarUsuario
 }

export default connect(mapStateToProps, mapDispatchToProps)(Registro)