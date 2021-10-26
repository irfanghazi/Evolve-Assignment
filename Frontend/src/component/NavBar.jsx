import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ width: "110px", height: "60px" }}
            />
          </Navbar.Brand>
          <Nav className="ms-right">
            <LinkContainer to="/signup">
              <Nav.Link>
                <h6 style={{ color: "green" }}>Sign up</h6>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                {" "}
                <h6 style={{ color: "green" }}>Login</h6>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
