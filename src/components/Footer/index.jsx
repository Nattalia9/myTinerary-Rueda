import React from 'react'
import './style.css'
import Nav from 'react-bootstrap/Nav';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {
	return (
		<footer>
			<div className='container py-4'>
				<div className="row justify-content-between">
					<div className="col-6">
						<p>Copyright © 2023 MyTinerary. All Rights Reserved.</p>
					</div>
					<div className="col-6 d-flex justify-content-end align-items-center gap-3">
						<Nav.Link><Anchor to="/" className='anchor'>/ Home</Anchor></Nav.Link>
            <Nav.Link eventKey="link-1" ><Anchor to="/cities" className='anchor gap-2'>/ Cities</Anchor></Nav.Link>
						<h6>Follow Us: </h6>
						<Nav className='gap-3'>
							<Nav.Item>
								<Nav.Link eventKey="link-1" className='social-media'><BsFacebook className='icon-color'/></Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2" className='social-media'><BsInstagram className='icon-color'/></Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-3" className='social-media'><BsTwitter className='icon-color'/></Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
				</div>		
			</div>
		</footer>
	)
}
