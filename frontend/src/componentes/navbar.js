import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'

function Headers(props) {
  var logoUser = props.token
  ? <img className="userImg" src= {(`${props.urlImage} `)}/>
  : <img className="userImg" src={require('../assets/user.png').default}/>
    let logo=require('../assets/logo.png')
    return (
      <Navbar  collapseOnSelect expand="lg" className="navbar" variant="dark">     
      <Container>
      <div className="navbar-izquierda">
         <div >
        <img src={logo.default}/>
         </div>
         <div>
         <h1 className="mytinerary-navbar" >MyTinerary</h1>
        
         </div>
      </div>   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
            
          <Nav.Link className="link-contenedor link-navbar" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="link-contenedor link-navbar" as={Link}to="/cities" >Cities</Nav.Link>   
               
          <NavDropdown className="user-drop link-contenedor" title={logoUser} id="collasible-nav-dropdown">
            {props.token ?<NavDropdown.Item className="link-contenedor-drop" onClick={() => props.logOut()}>Log Out</NavDropdown.Item>:<><NavDropdown.Item className="link-contenedor-drop" as={Link} to="/registro"> Sign Up</NavDropdown.Item>
            <NavDropdown.Item className="link-contenedor-drop" as={Link} to="/inicioSesion">Sign In</NavDropdown.Item> </>}   
          </NavDropdown>
          
         <div className="espacio"></div>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
    );
  }



  
  


const mapStateToProps = (state) =>{
  return {
     token:state.authReducer.token,
        name: state.authReducer.name,
        urlImage: state.authReducer.urlImage,
  }
}
const mapDispatchToProps = {
  logOut: authActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)
