import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	FormControl,
	Form,
	Button,
} from 'react-bootstrap';
import './Navigation.css';
const Navigation = () => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='#home'>Home</Nav.Link>
				<Nav.Link href='#features'>Features</Nav.Link>
				<Nav.Link href='#pricing'>Pricing</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl
					type='text'
					placeholder='Search'
					className='mr-sm-2'
				/>
				<Button variant='outline-info'>Search</Button>
			</Form>
		</Navbar>
	);
};

export { Navigation };
