import React, { useState } from 'react'
import './style.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link as Anchor } from 'react-router-dom'


export default function NavScrollExample() {

  const [navb, setNavb] = useState(false) 
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setNavb(true)
    } else {
      setNavb(false)
    }
  }

  window.addEventListener('scroll', changeColor)


	return (
		<Navbar expand="lg" className={navb ? 'navb navbg' : 'navb'}>
      <Container>
        <Navbar.Brand className="logo" href="#">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
            defaultActiveKey="/home"
          >
            <Nav.Link className={navb ? 'coloo' : 'navb'}><Anchor to="/" className='anchor'>/ Home</Anchor></Nav.Link>
            <Nav.Link eventKey="link-1" className={navb ? 'coloo' : 'navb'} ><Anchor to="/cities" className='anchor'>/ Cities</Anchor></Nav.Link>
          </Nav>
          <Button className="login px-3"><span className="icon"><BsFillPersonFill className="red" /></span>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}
