import React from 'react';
import './Navigation.css';
const Navigation = () => {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<h3>Rent-a-Movie</h3>
			</div>
			<form action=''>
				<input type='text' name='' id='' />
				<button>Search</button>
			</form>
			<ul className='nav_links'>
				<li>Home</li>
				<li>About</li>
				<li>Movies</li>
				<li>Contact</li>
				<li>API</li>
			</ul>
		</nav>
	);
};

export { Navigation };
