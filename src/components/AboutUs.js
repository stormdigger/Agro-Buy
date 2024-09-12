// src/components/AboutUs.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutImage from '../images/about.jpeg';

function AboutUs() {
  return (
    <Container id="aboutus" className="mt-5">
      <Row className="row-header text-center">
        <Col>
          <h2 className="title"><strong>About Us</strong></h2>
          <hr />
        </Col>
      </Row>
      <Row className="row-content py-3">
        <Col xs={12} sm={6}>
          <h2>Our History</h2>
          <p style={{ textAlign: 'justify' }}>
            At Agro-Buy, we are dedicated to nurturing the growth of your agricultural dreams. Whether you’re a seasoned farmer or just starting your journey in agriculture, we provide everything you need to cultivate success right from the heart of your fields. Discover a vast selection of high-quality seeds tailored to your specific crop needs. From staple grains to exotic varieties, our seeds promise robust growth and high yields. Enhance soil fertility with our top-grade manure. Our organic and chemical-free options are designed to boost soil health and support sustainable farming practices. Choose from a range of fertilizers formulated to deliver essential nutrients to your crops. Whether you need quick-release solutions or slow-release options, we have the perfect product to maximize your crop’s potential.
          </p>
        </Col>
        <Col sm>
          <Image src={aboutImage} alt="About Us" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
