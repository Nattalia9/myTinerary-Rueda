import React, { useState } from 'react'
import './style.css'

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link as Anchor } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions.js';


export default function NavScrollExample() {

  const user = useSelector( store => store.userReducer.user);
  const dispatch = useDispatch()

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
            <Nav.Link><Anchor to="/" className={navb ? 'coloo anchor-nav' : 'navb'}>/ Home</Anchor></Nav.Link>
            <Nav.Link><Anchor to="/cities" className={navb ? 'coloo anchor-nav' : 'navb'}>/ Cities</Anchor></Nav.Link>
          </Nav>
          {/* <Button className="login px-3"><span className="icon"><BsFillPersonFill className="red" /></span>Login</Button> */}
          {
            user 
              ? (
                <Anchor to="/" className="login px-3" onClick={() => dispatch(logout())}><span className="icon"><BsFillPersonFill className="red" /></span>Log Out</Anchor>
              )
              :
              (
                <Anchor to="signIn" className="login px-3"><span className="icon"><BsFillPersonFill className="red" /></span>Login</Anchor>
              )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}
