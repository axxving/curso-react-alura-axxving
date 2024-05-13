import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { EmojiSmile } from 'react-bootstrap-icons';

export const Header = () => {
    return (
        <Container fluid className='header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <EmojiSmile className="mr-2 titulo-header" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link className='nav-link' href="#">Inicio</Nav.Link>
                            <Nav.Link className='nav-link' href="#">Acerca</Nav.Link>
                            <Nav.Link className='nav-link' href="#">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};