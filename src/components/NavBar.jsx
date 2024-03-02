import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark p-3 sticky-top">
                <Container className=''>
                    <Navbar.Brand href="/" className='font-monospace text-white'>MrdhKrnwn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white text-white-50' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Link to='home' spy={true} smooth={true} offset={-200} className='nav-link' activeStyle={{color : 'white',}}>Home</Link>
                            <Link to="service" spy={true} smooth={true} className='nav-link' activeStyle={{color : 'white',}}>Service</Link>
                            <Link to="project" spy={true} smooth={true} className='nav-link' activeStyle={{color : 'white',}}>Project</Link>
                            <Link to="skills" spy={true} smooth={true} className='nav-link' activeStyle={{color : 'white',}}>Skills</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;