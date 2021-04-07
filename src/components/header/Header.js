import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';
import './Header.css'

function Header() {
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    var handleLogout = () => {
         auth.signOut();
        dispatch({
            type: "SET_USER",
            user: null
        })
        alert("You are now logged out.")
    }

    var handleClick = () => {
        history.push("/login")
    }
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
                    <Nav.Link onClick={user ? handleLogout : handleClick}>{user ? "Logout" : "Login"}</Nav.Link>
                    <LinkContainer to="/bookings"><Nav.Link>My Bookings</Nav.Link></LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
