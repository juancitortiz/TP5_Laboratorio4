import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

class NavigationBar extends React.Component {
    render(){
        return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="dondeestamos">Donde Estamos</Nav.Link>
                        <Nav.Link href="productos">Productos</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
        );
    }
}

export default NavigationBar;