import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom"

import { CartWidget } from "./CartWidget";

import data from "../data/products.json"

const menu = [
  {text: "Ropa interior", link: "/#ropaInterior"},
  {text: "Accesorios", link: "/#accesorios"},
  {text: "Sobre Nosotras", link: "/#sobreNosotras"},
  {text: "Blog", link: "/#contacto"}
]

const categoria =data.map (product => product.categoria.id)
const unique = new Set(categoria)

export const NavBar = () => (
  <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand>GINGER</Navbar.Brand>
      <Nav className="me-auto">
        {[...unique].map(item =>(
          <Nav.Link key={item} className="nav-link" to={`/categoria/${item}`}>
            {item}
          </Nav.Link>
        ))}
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
);
