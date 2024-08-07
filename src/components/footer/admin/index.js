import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const FooterAdmin = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#f8f9fa" }}>
      <Container fluid>
        <Row className="text-center">
          <Col lg={12} className="link mb-2">
            <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
            <FontAwesomeIcon icon={faInstagram} className="mx-2" />
            <FontAwesomeIcon icon={faYoutube} className="mx-2" />
            <FontAwesomeIcon icon={faGoogle} className="mx-2" />
          </Col>
          <Col lg={12}>
            2024 CopyRight Phan mem quan ly | Design by <a href="#">GearPoly</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterAdmin;
