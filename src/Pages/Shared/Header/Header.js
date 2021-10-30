import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky='top' bg='dark' variant="dark" collapseOnSelect expand="lg">
                <Container>


                    <Navbar.Brand href="#home" className='banner-logo justify-content-start'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUwhdtvzU40DYog0R5A1rrkIyLJ0BVoxcxQ&usqp=CAU' alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>Appointments</Nav.Link>
                        <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant='primary'>LogOut</Button> :

                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                        <Navbar.Text style={{ color: "blue" }}>
                            Signed in as: <a href="#login" style={{ color: "blue" }}>{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>




                </Container>
            </Navbar>

        </div>
    );
};

export default Header;