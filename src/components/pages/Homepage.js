import React from 'react';
import { Card } from '../Card';
import Carousel from '../carousel/Carousel';
// import Footer from '../footer';
import Trending from '../Trending';
import './Homepage.css';
const Homepage = () => {
	return (
		<section className='container'>
			<Carousel />
			<Trending />
			<div className='oscar'>
				<h1 className='head'>OSCAR AWARDEES AND NOMINEES</h1>
				<Carousel />
			</div>

			<section className='classics '>
				<h1 className='head'>CLASSICS</h1>
				<div className='cards row'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
			<section className='classics'>
				<h1 className='head'>THRILLING DIRECTORS</h1>
				<div className='cards row'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</section>
	);
};
export default Homepage;
