import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/phuthien0705"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/thien.hua.796/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hphuthien/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/thien__75"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
