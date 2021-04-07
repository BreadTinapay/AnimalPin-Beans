import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Header.css'

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <LinkContainer to="/">
                <Navbar.Brand>Animal<span style={{ color: "pink" }}>Pin</span></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                    <LinkContainer to="/bookings"><Nav.Link>My Bookings</Nav.Link></LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
