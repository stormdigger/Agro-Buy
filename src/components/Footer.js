import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer bg-success py-4">
      <Container className="footer-content">
        <Row className="text-center">
          {/* Download Our App */}
          <Col xs={12} sm={4} className="my-3">
            <h3 className="footer-heading">Download Our App</h3>
            <p>Download the app for Android and iOS mobile phones.</p>
            {/* <div className="app-logo">
              <a href="#" className="app-logo-item">
                <img src="play-store.png" alt="Play Store" />
              </a>
              <a href="#" className="app-logo-item">
                <img src="app-store.png" alt="App Store" />
              </a>
            </div> */}
          </Col>

          {/* Useful Links */}
          <Col xs={12} sm={4} className="my-3">
            <h3 className="footer-heading">Useful Links</h3>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Coupons</a></li>
              <li><a href="#">Blog Post</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Join Affiliate</a></li>
            </ul>
          </Col>

          {/* Follow Us */}
          <Col xs={12} sm={4} className="my-3">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="http://google.com/+"><i className="fab fa-google-plus-g"></i></a>
              <a href="http://www.facebook.com/profile.php?id="><i className="fab fa-facebook-f"></i></a>
              <a href="http://twitter.com/"><i className="fab fa-twitter"></i></a>
              <a href="http://youtube.com/"><i className="fab fa-youtube"></i></a>
              <a href="mailto:"><i className="fas fa-envelope"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col auto>
            <p className="footer-copy">© 2024 Agro-Buy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
