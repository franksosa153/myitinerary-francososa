import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'

function Headers() {
    let logo=require('../assets/logo.png')
    let logoUser= <img className="user-img" src={require('../assets/user.png').default}/>
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
            
          <Nav.Link className="link-contenedor"><Link className="link-navbar" to="/">Home</Link></Nav.Link>
          <Nav.Link className="link-contenedor"><Link className="link-navbar" eventKey={2} to="/cities">
            Cities
          </Link></Nav.Link>          
          <NavDropdown className="user-drop link-contenedor" title={logoUser} id="collasible-nav-dropdown">
            <NavDropdown.Item className="link-contenedor-drop" href="#"> <Link  to="/registro">Sign Up</Link></NavDropdown.Item>
            <NavDropdown.Item className="link-contenedor-drop"><Link  to="/inicioSesion">Sign In</Link></NavDropdown.Item>
          </NavDropdown>
         <div className="espacio"></div>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
    );
  }
  export default Headers;
