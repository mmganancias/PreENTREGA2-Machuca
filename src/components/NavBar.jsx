import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

import data from "../data/products.json"

const menu = [
  {text: "Ropa interior", link: "/#ropaInterior"},
  {text: "Accesorios", link: "/#accesorios"},
  {text: "Sobre Nosotras", link: "/#sobreNosotras"},
  {text: "Blog", link: "/#contacto"}
]

export const NavBar = () => (
  <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">GINGER</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#ropaInterior">Ropa interior</Nav.Link>
        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
        <Nav.Link href="#sobreNosotras">Sobre Nosotras</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
);
