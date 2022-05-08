import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className='d-flex' as={Link} to="/">
                        <img height={35} src={logo} alt="" />
                        <p className='fw-bold mx-2'>THE TV WAREHOUSE</p>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link className='fw-bold' as={Link} to='/home'>HOME</Nav.Link>
                            <Nav.Link className='fw-bold' as={Link} to='/inventories'>INVENTORY</Nav.Link>
                            <Nav.Link className='fw-bold' as={Link} to='/manageitems'>MANAGE ITEMS</Nav.Link>
                            <Nav.Link className='fw-bold' as={Link} to='/additem'>ADD ITEM</Nav.Link>
                            <Nav.Link className='fw-bold' as={Link} to='/myitems'>MY ITEMS</Nav.Link>
                            <Nav.Link className='fw-bold' as={Link} to='/blogs'>BLOGS</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-danger text-decoration-none fw-bold' onClick={handleSignOut}>SIGN OUT</button>
                                    :
                                    <Nav.Link className='text-danger fw-bold' as={Link} to="/login">
                                        LOGIN
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;