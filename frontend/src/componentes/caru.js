import React from "react";

import { Carousel, Col, Card, Row } from "react-bootstrap";


const Slide = () => {
  const Cities = {
    datauno: [
      {
        title: "Arabia Saudita",
        src: "../assets/citys/London.jpg",
      },

      {
        title: "Grecia",
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
    ],
  };
  const Cities2 = {
    datados: [
      {
        title: "Montreal",
        src: "./assets/Montreal.jpg",
      },

      {
        title: "Moscu",
        src: "./assets/Moscu.jpg",
      },

      {
        title: "Ottawa",
        src: "./assets/Ottawa.jpg",
      },

      {
        title: "Polonia",
        src: "./assets/Polonia.jpg",
      },
    ],
  };
  const Cities3 = {
    datatres: [
      {
        title: "Roma",
        src: "./assets/Roma.jpg",
      },

      {
        title: "Sidney",
        src: "./assets/Sidney.jpg",
      },

      {
        title: "Vancouver",
        src: "./assets/Vancouver.jpg",
      },

      {
        title: "Whistler",
        src: "./assets/Whistler.jpg",
      },
    ],
  };
  const { datauno } = Cities;
  const { datados } = Cities2;
  const { datatres } = Cities3;
  return (
    <div className="container-carousel">
      <Carousel>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            {datauno.map((item) => (
              <Col className="tamaño-img">
                <Card className="" >
                  <Card.Img className="pepe"  variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            {datados.map((item) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            {datatres.map((item) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;