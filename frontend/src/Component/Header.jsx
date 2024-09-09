import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCredentials } from "../slices/authSlices";
import "../customcss/header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logouthandler = () => {
    dispatch(removeCredentials());
  };

  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="navbar-custom py-2"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
            Rahul Adhikari
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto text-center nav">
              <Nav.Link as={Link} to="/" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="fw-bold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="fw-bold">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/achievments" className="fw-bold">
                Achievements
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="fw-bold">
                Contact
              </Nav.Link>

              {userInfo && (
                <NavDropdown
                  title="Admin"
                  id="adminMenu"
                  className="fw-bold"
                  menuVariant="dark"
                >
                  <LinkContainer to="/admin/createproject">
                    <NavDropdown.Item>Project</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/createachievement">
                    <NavDropdown.Item>Achievement</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/createcertification">
                    <NavDropdown.Item>Certification</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/employer">
                    <NavDropdown.Item>Employer</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/experience">
                    <NavDropdown.Item>Experience</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logouthandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <div className="social-nav d-flex align-items-center">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
