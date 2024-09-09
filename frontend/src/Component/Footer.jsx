import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import resumeDownload from "./Resume"; // Ensure this function is properly defined

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white mt-4 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <div className="py-3">
              <h5 className="mb-3">Designed and Developed by Rahul Adhikari</h5>
              <Button
                variant="outline-light"
                onClick={() => navigate("/contact")}
                className="my-2"
              >
                Contact Me
              </Button>
              <span className="mx-2">|</span>
              <Button
                variant="outline-light"
                onClick={() => resumeDownload()}
                className="my-2"
              >
                Resume
              </Button>
              <span className="mx-2">|</span>
              <Link to="/login">
                <Button variant="outline-light" className="my-2">
                  Login
                </Button>
              </Link>
              <p className="my-3">Connect with me on social media:</p>
              <SocialIcon
                className="social-icons mx-2"
                target="_blank"
                url="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
              />
              <SocialIcon
                className="social-icons mx-2"
                target="_blank"
                url="https://github.com/Rahulad12"
              />
            </div>
          </Col>

          <Col md={4}>
            <div className="py-3">
              <h5 className="mb-3">More Contact</h5>
              <p>
                <a href="mailto:adrahul2014@gmail.com" className="text-white">
                  <MdOutlineEmail size={30} className="text-danger me-2" />
                  adrahul2014@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+977-9847785623" className="text-white">
                  <FaPhoneAlt size={20} className="text-success me-2" />
                  +977-9847785623
                </a>
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="py-3">
              <h5 className="mb-3">Services I Provide</h5>
              <ul className="list-unstyled">
                <li>Dynamic Web Development</li>
              </ul>
              <h5 className="mb-3">Stack I Use</h5>
              <ul className="list-unstyled">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL / NoSQL</li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">© 2024 Rahul Adhikari. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
