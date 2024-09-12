// src/components/LatestProducts.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import flax from '../images/FlaxSeeds.jpg';
import grape from '../images/Grape-Seeds-1 - Copy.jpg';
import hemp from '../images/Hemp-Seeds-1.jpg';
import pomegranate from '../images/Pomegranate-Seeds-1 - Copy.jpg';
import pumpkin from '../images/Pumpkin-Seeds-1.jpg';
import rajgira from '../images/Rajgira-Seeds - Copy.jpg';
import sesame from '../images/Sesame-Seeds-1.jpg';
import sunflower from '../images/Sunflower-Seeds-1 - Copy.jpg';
import './LatestProducts.css'; // Import the CSS file

function LatestProducts() {
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth: width, offsetHeight: height } = currentTarget;
    
    const x = clientX - currentTarget.getBoundingClientRect().left;
    const y = clientY - currentTarget.getBoundingClientRect().top;

    const xRotation = ((y / height) - 0.5) * 20; // Tilt up to 20 degrees
    const yRotation = ((x / width) - 0.5) * -20; // Tilt up to -20 degrees

    currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const products = [
    { title: 'FlaxSeeds', image: flax, price: 'Rs. 50.00' },
    { title: 'Grape-Seeds', image: grape, price: 'Rs. 50.00' },
    { title: 'Hemp-Seeds', image: hemp, price: 'Rs. 50.00' },
    { title: 'Pomegranate-Seeds', image: sunflower, price: 'Rs. 50.00' },
    { title: 'Pumpkin-Seeds', image: pumpkin, price: 'Rs. 50.00' },
    { title: 'Rajgira-Seeds', image: rajgira, price: 'Rs. 50.00' },
    { title: 'Sesame-Seeds', image: sesame, price: 'Rs. 50.00' },
    { title: 'Sunflower-Seeds', image: sunflower, price: 'Rs. 50.00' },
  ];

  return (
    <Container id="latest" className="mt-5">
      <Row className="row-header text-center">
        <Col>
          <h2 className="title"><strong>Latest Products</strong></h2>
          <hr />
        </Col>
      </Row>
      <Row className="row-header mt-3 justify-content-center">
        <Col xs={11}>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 align-items-center">
            {products.slice(0, 4).map((product, index) => (
              <Col key={index}>
                <div
                  className="card-container"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card className="h-100 card">
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                      <Card.Text>
                        <h4>{product.title}</h4>
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <p>{product.price}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="row-header mt-3 justify-content-center">
        <Col xs={11}>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products.slice(4).map((product, index) => (
              <Col key={index}>
                <div
                  className="card-container"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card className="h-100 card">
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                      <Card.Text>
                        <h4>{product.title}</h4>
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                        <p>{product.price}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LatestProducts;
