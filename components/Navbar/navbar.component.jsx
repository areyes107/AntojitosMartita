import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" position="fixed" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt="Hamburguer logo"
          src="https://i.ibb.co/0m2Y0jG/Favicon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Antojitos Martita
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Platillos</Nav.Link>
          <Nav.Link href="#food">Combos</Nav.Link>
          <Nav.Link href="#about">Acerca De</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
