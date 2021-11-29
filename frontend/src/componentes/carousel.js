import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card'


export default class MultipleRows extends Component {
  render() {
    const Cities = 
       [
        {
          title: "London",
          src: "../assets/citys/London.jpg",
        },
  
        {
          title: "Buenos Aires",
          src: "../assets/citys/BuenosAires.jpg",
        },
  
        {
          title: "Indonesia",
          src: "../assets/citys/IslaMujeres.jpg",
        },
  
        {
          title: "Miami",
          src: "../assets/citys/Madrid.jpg",
        },
        {
          title: "Bariloche",
          src: "../assets/citys/Bariloche.jpg",
        },
  
        {
          title: "Cordoba",
          src: "../assets/citys/Cordoba.jpg",
        },
  
        {
          title: "Moscow",
          src: "../assets/citys/Moscow.jpg",
        },
  
        {
          title: "Paris",
          src: "../assets/citys/Paris.jpg",
        },
        {
          title: "Osaka",
          src: "../assets/citys/Osaka.jpg",
        },
  
        {
          title: "Tokyo",
          src: "../assets/citys/Tokyo.jpg",
        },
  
        {
          title: "Toronto",
          src: "../assets/citys/Toronto.jpg",
        },
  
        {
          title: "Roma",
          src: "../assets/citys/Roma.jpg",
        },
      ];
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "3px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      pauseOnHover: false,
      responsive:[
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 4,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
      autoplaySpeed: 6000,
          }
        }
      ]
    };
    return (
      <div className="contenedor-carusel">
        <h2 className="tituloC">Popularity MyTinerary</h2>
        <Slider {...settings}>
          {Cities.map((img, index)=>{
            return(
              <div key={index} >
                <Card className="cards">
                  <Card.Img className="card" variant="top" src={img.src} />
                  <Card.Body>
                      <Card.Text>
                        <h3>{img.title}</h3>
                     </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          }
          )}
        </Slider>
      </div>
    );
  }
}