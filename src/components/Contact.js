// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="py-4">
      <Row className="row-header text-center">
        <Col>
          <h2 className="title"><strong>Contact Us</strong></h2>
          <hr />
        </Col>
      </Row>

      <Row className="row-content py-3 justify-content-center">
        <Col xs={12} md={9}>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="firstname">
              <Form.Label column sm={2}>First Name</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="First Name" name="firstname" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="lastname">
              <Form.Label column sm={2}>Last Name</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Last Name" name="lastname" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="emailid">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" name="emailid" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="feedback">
              <Form.Label column sm={2}>Your Feedback/Query</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={5} placeholder="Your Feedback/Query" name="feedback" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="success" type="submit" className="px-5">
                  <strong>Submit</strong>
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
