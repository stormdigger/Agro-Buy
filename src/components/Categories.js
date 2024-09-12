// src/components/Categories.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import seedImage from '../images/seed1.jpg';
import fruitsImage from '../images/vtab.jpg';
import machineryImage from '../images/machinery.jpg'; // Ensure this image is imported

function Categories() {
  const categories = [
    { title: 'Seeds', image: seedImage },
    { title: 'Fruits & Vegetables', image: fruitsImage },
    { title: 'Tools & Machinery', image: machineryImage },
  ];

  return (
    <Container id="categories" className="mt-5">
      <Row className="row-header text-center">
        <Col>
          <h2 className="title"><strong>Categories</strong></h2>
          <hr />
        </Col>
      </Row>
      <Row className="row-content py-1 justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={9} md={3} className="text-center my-3 mx-2">
            <Card className="category-card">
              <Card.Img src={category.image} alt={category.title} className="category-image" />
              {/* <Card.ImgOverlay className="category-overlay">
                <Card.Title className="category-title">{category.title}</Card.Title>
              </Card.ImgOverlay> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
