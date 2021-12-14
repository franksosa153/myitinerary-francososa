import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'
import {useRef} from 'react'
import { NavLink } from "react-router-dom"
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import{Link} from 'react-router-dom'
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

    const responseGoogle = (res) => {
        console.log(res);
        let googleUser = {
          name: res.profileObj.givenName,
          lastName: res.profileObj.familyName,
          email: res.profileObj.email,
          password: res.profileObj.googleId,
          urlImage: res.profileObj.imageUrl,
          country: "Argentina",
          google: true,
        };
        props
          .registerUser(googleUser)
          .then((response) => response.data.success)
          .catch((error) => console.log(error));
      };
    const inputEmail = useRef()
    const inputContraseña = useRef()
    const inputName = useRef()
    const inputLastName = useRef()
    const inputCountry=useRef()
    const inputUrlImage=useRef()
    const handleSubmit = async (
        user
      ) => {
        const errores = await props.registerUser(
          user
        );
        console.log(errores);
        if (errores) {
          errores.errores.map((e) =>
            toast.error(e.message, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          );
        }
      };
      const handleSubmitInputs = (e) => {
        e.preventDefault();
        const user = {
          name:inputName.current.value,
          lastName:inputLastName.current.value,
          email: inputEmail.current.value,
          password: inputContraseña.current.value,
          urlImage: inputUrlImage.current.value,
          country:inputCountry.current.value, 
        }
        handleSubmit(user);
    inputName.current.value = "";
    inputLastName.current.value = "";
    inputEmail.current.value = "";
    inputContraseña.current.value = "";
    inputUrlImage.current.value = "";
    inputCountry.current.value = "";
  };

    return (
        <div className="container-formulario">
            
            <h2 className='subtituloR'>Join to our World of Adventures!</h2>
            <h4 className='subtituloR'>Already have an account?<NavLink  as={Link} to="/inicioSesion"> Log in!</NavLink></h4>
            <main className="main-formulario">
            <form onSubmit={handleSubmitInputs}>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Name
                        <input className='inputsForm' type="text" ref={inputName} />
                    </label>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>LastName
                        <input className='inputsForm' type="text" ref={inputLastName} placeholder='put your last name' />
                    </label>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Url Image
                        <input className='inputsForm' type="text"  ref={inputUrlImage}/>
                    </label>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Country
                    <select ref={inputCountry} name="select subtituloR">
                        <option  disabled value="" selected>Choose your Country</option>
                        {countries.map((country)=>{
                            return(
                                <option  value={country}>{country}</option>
                            )
                        })}
                    </select>
                    </label>
                    
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Mail
                        <input className='inputsForm' type="email" ref={inputEmail} name="name"/>
                    </label>
                    <label className='labelFormulario subtituloR' style={{display: 'flex',flexDirection: 'column'}}>Password
                        <input className='inputsForm' type="text" ref={inputContraseña} name="name"/>
                    </label>
                    <div className='ajustarEnvio'>
                    <input className='inputsForm labelFormulario enviar ' type="submit" value="Enviar"/>
                    </div>
                    <h1 className='or'>Or </h1>
                    <GoogleLogin 
                    className='estilosGOOgle'
    clientId="477764676540-drivpqs59urt1ltdeddemqs1l9jhmu0t.apps.googleusercontent.com"
    buttonText="Sign Up"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
                </form>
                
            </main>
        </div>
    )
    
}


    
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.user
    }
 }
 const mapDispatchToProps = {
    registerUser: authActions.register
 }

export default connect(mapStateToProps, mapDispatchToProps)(Registro)