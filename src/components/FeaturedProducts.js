// src/components/FeaturedProducts.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import apricot from '../images/Apricot-Kernels-1.jpg';
import basil from '../images/Basil-Seeds - Copy.jpg';
import caraway from '../images/Caraway-Seeds.jpg';
import chia from '../images/Chia-Seeds.jpg';
import './FeaturedProducts.css'; // Import the CSS file

function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseMove = (e, index) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth: width, offsetHeight: height } = currentTarget;
    
    const x = clientX - currentTarget.getBoundingClientRect().left;
    const y = clientY - currentTarget.getBoundingClientRect().top;

    const xRotation = ((y / height) - 0.5) * 20; // Tilt up to 20 degrees
    const yRotation = ((x / width) - 0.5) * -20; // Tilt up to -20 degrees

    currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    const card = document.querySelector(`#card-${index}`);
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
    setHoveredIndex(null);
  };

  const products = [
    { title: 'Apricot-seeds', image: apricot, price: 'Rs. 50.00' },
    { title: 'Basil-Seeds', image: basil, price: 'Rs. 50.00' },
    { title: 'Caraway-Seeds', image: caraway, price: 'Rs. 50.00' },
    { title: 'Chia-Seeds', image: chia, price: 'Rs. 50.00' },
  ];

  return (
    <Container id="featured" className="mt-5">
      <Row className="row-header text-center">
        <Col>
          <h2 className="title"><strong>Featured Products</strong></h2>
          <hr />
        </Col>
      </Row>
      <Row className="row-header mt-3 justify-content-center">
        <Col xs={11}>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {products.map((product, index) => (
              <Col key={index} className="dcard">
                <Card
                  id={`card-${index}`}
                  className="h-100 card"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="card-img-container">
                    <Card.Img className="card-img" variant="top" src={product.image} alt={product.title} />
                  </div>
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
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedProducts;
