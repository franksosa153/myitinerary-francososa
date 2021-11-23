import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'

function Headers() {
    let logo=require('../assets/logo.png')
    return (
      <Navbar  collapseOnSelect expand="lg" className="navbar" variant="dark">     
      
      <Container>
      <div className="header-izq">
         <div >
            <img className="logo-r"src={logo.default}/>
         </div>
         <div>
         <h1 className="h1-header" >MyTinerary</h1>
         </div>
      </div>   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
            
          <Nav.Link><Link className="link-f" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className="link-f" eventKey={2} to="/citis">
            Cities
          </Link></Nav.Link>          
          <NavDropdown title="" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Sign Up for Free!</NavDropdown.Item>
            <NavDropdown.Item href="citis.js">Or Sign In!</NavDropdown.Item>
          </NavDropdown>
          <img className="user-img" src={require('../assets/user.png').default}/>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
    );
  }
  export default Headers;
