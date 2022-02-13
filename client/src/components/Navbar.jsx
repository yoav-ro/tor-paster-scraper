import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">DN-Paster</Navbar.Brand>
            </Container>
        </Navbar >
    )
}

export default NavBar;