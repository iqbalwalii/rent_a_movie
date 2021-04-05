import React from 'react';
import { Link } from 'react-router-dom';
// import '../Skeleton/css/skeleton.css';
// import '../Skeleton/css/normalize.css';
import './Card.css';
export const Card = () => {
	return (
		<div className='card three columns'>
			<div className=' three columns kard'>
				<img
					className='movie-image'
					src='./assets/images/madmax.jpg'
					alt=''
				/>
				<h3 className='movie-rating'>7.8</h3>
				<div className='movie-details'>
					<h2 className='movie-title'>
						Once upon a time in hollywood
					</h2>
					<p className='movie-description'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>
				<div className='movie-actions'>
					<h2 className='movie-genres'>Action/ Thriller</h2>
					<div className='movie-buttons'>
						<button>Watch Now</button>
						<button>
							<Link to='movie:id' />
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
