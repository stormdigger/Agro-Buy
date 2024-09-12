// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll'; // For smooth scrolling
import logo from '../images/logo.png';
import jumbotronImage from '../images/vegables-removebg-preview.png';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="md" className="navbar navbar-light navbar-expand-md">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} height="40" width="40" alt="Agro-Buy Logo" /> Agro-Buy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="Navbar" />
          <Navbar.Collapse id="Navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#categories">Products</Nav.Link>
              <Nav.Link href="#aboutus">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="jumbotron bg-success py-5">
        <Container>
          <div className="row row-header">
            <div className="col-12 col-sm-6 align-self-center">
              <h1><strong>Get Your All Agriculture <br />Product At One Place!</strong></h1>
              <p>All plants seeds, fertilizers, manure, fruits, vegetables<br /> and agricultural machinery also available</p>
              <Button variant="danger" className="rounded-pill border-0">
                <div className="px-3">
                  Explore Now &#10170;
                </div>
              </Button>
            </div>
            <div className="col-12 col-sm-6 my-2">
              <img src={jumbotronImage} className="img-fluid" alt="Vegetables" />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Header;