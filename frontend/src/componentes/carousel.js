import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
export default function carousel(props) {
 

    return (
        <div>
            <Carousel>
  <Carousel.Item >
      <div className="carousel-img">
        
      <div>
     <a href="https://www.google.com/"><p className="citi-name"> London</p><img
      className="d-block tvariable"
      src={`../assets/citys/London.jpg`}
      alt="First slide"
    /></a>
    <a href="https://www.google.com/"><p className="citi-name"> BuenosAires</p><img
      className="d-block tvariable"
      src="../assets/citys/BuenosAires.jpg"
      alt="First slide"
    /></a>
    </div>
    <div>
    <div>  
    <a href="https://www.google.com/"><p className="citi-name"> Isla Mujeres</p><img
      className="d-block tvariable"
      src="../assets/citys/IslaMujeres.jpg"
      alt="First slide"
    /></a> 
    </div> 
    <a href="https://www.google.com/"><p className="citi-name"> Madrid</p><img
      className="d-block tvariable"
      src="../assets/citys/Madrid.jpg"
      alt="First slide"
    /></a>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item >
      <div className="carousel-img">
      <div>
     <a href="https://www.google.com/"><p className="citi-name">Maldives</p><img
      className="d-block tvariable"
      src="../assets/citys/Maldives.jpg"
      alt="First slide"
    /></a>
    <a href="https://www.google.com/"><p className="citi-name">Moscow</p><img
      className="d-block tvariable"
      src="../assets/citys/Moscow.jpg"
      alt="First slide"
    /></a>
    </div>
    <div>
    <div>  
    <a href="https://www.google.com/"><p className="citi-name"> New York</p><img
      className="d-block tvariable"
      src="../assets/citys/NewYork.jpg"
      alt="First slide"
    /></a> 
    </div> 
    <a href="https://www.google.com/"><p className="citi-name">Cordoba</p><img
      className="d-block tvariable"
      src="../assets/citys/Cordoba.jpg"
      alt="First slide"
    /></a>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item >
      <div className="carousel-img">
      <div>
     <a href="https://www.google.com/"><p className="citi-name"> Osaka</p><img
      className="d-block tvariable"
      src="../assets/citys/Osaka.jpg"
      alt="First slide"
    /></a>
    <a href="https://www.google.com/"><p className="citi-name"> Paris</p><img
      className="d-block tvariable"
      src="../assets/citys/Paris.jpg"
      alt="First slide"
    /></a>
    </div>
    <div>
    <div>  
    <a href="https://www.google.com/"><p className="citi-name"> Seoul</p><img
      className="d-block tvariable"
      src="../assets/citys/Seoul.jpg"
      alt="First slide"
    /></a> 
    </div> 
    <a href="https://www.google.com/"><p className="citi-name">Tokyo </p><img
      className="d-block tvariable"
      src="../assets/citys/Tokyo.jpg"
      alt="First slide"
    /></a>
    </div>
    </div>
  </Carousel.Item>
  
</Carousel> 
     
        </div>
    )
}

