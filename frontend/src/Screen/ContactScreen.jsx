import React from "react";
import Contact from "../Component/Contact";
import { Container, Row, Col } from "react-bootstrap";
import { MdGroupRemove, MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "../customcss/contact.css"; // Importing the custom CSS
import { current } from "@reduxjs/toolkit";

const ContactScreen = () => {
  return (
    <Container fluid style={{ marginTop: "5rem" }} className="contact-screen">
      <Row>
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <p className="text-justify fs-5 mb-4 description-animation">
            Hi, I'm <strong>Rahul Adhikari</strong>, a passionate student of
            computer science, currently pursuing my Bachelor's degree. I've had
            the opportunity to immerse myself in various areas of tech,
            developing skills in both web development and data science.
          </p>

          <div className="d-flex justify-content-center align-items-start service-section">
            <div className="service-info mx-2">
              <h3>Service I Offer</h3>
              <p>Web Development</p>
            </div>

            <div className="stack-info mx-2">
              <h3>Stack I Use</h3>
              <ul className="list-unstyled">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL / NoSQL</li>
              </ul>
            </div>

            <div className="contact-info mx-2">
              <h3>Contact More</h3>
              <p>
                <MdOutlineEmail size={30} className="text-danger me-2" />
                <a href="mailto:adrahul07@gmail.com">adrahul07@gmail.com</a>
              </p>
              <p>
                <FaPhoneAlt size={20} className="text-success me-2" />
                <a href="tel:+977-9847785623">+977-9847785623</a>
              </p>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <Contact />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
