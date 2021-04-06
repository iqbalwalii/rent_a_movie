import React from 'react';
import { Card } from './Card';
// import '../Skeleton/css/skeleton.css';
// import '../Skeleton/css/normalize.css';
import './Trending.css';
const Trending = () => {
	return (
		<div>
			<h2 className='head'>JONATHAN WICKS</h2>
			<div className='row '>
				<div className='eight columns'>
					<div className='trending_row'>
						<div className='progress_bar'>
							<h4>JOHN WICK</h4>
							<h6>Keanu Himself, Scarlett Johanson</h6>
							<h6>10.0</h6>
							<button className='btn btn-gold'>keanu</button>
						</div>
					</div>
					<div className='trending_row'>
						<div className='progress_bar'>
							<h4>JOHN WICK</h4>
							<h6>Keanu Himself, Scarlett Johanson</h6>
							<h6>10.0</h6>
							<button className='btn btn-danger'>keanu</button>
						</div>
					</div>
					<div className='trending_row'>
						<div className='progress_bar'>
							<h4>JOHN WICK</h4>
							<h6>Keanu Himself, Scarlett Johanson</h6>
							<h6>10.0</h6>
							<button className='btn btn-danger'>keanu</button>
						</div>
					</div>
					<div className='trending_row'>
						<div className='progress_bar'>
							<h4>JOHN WICK</h4>
							<h6>Keanu Himself, Scarlett Johanson</h6>
							<h6>10.0</h6>
							<button className='btn btn-danger'>keanu</button>
						</div>
					</div>
					<div className='trending_row'>
						<div className='progress_bar'>
							<h4>JOHN WICK</h4>
							<h6>Keanu Himself, Scarlett Johanson</h6>
							<h6>10.0</h6>
							<button className='btn btn-danger'>keanu</button>
						</div>
					</div>
				</div>
				<div className='four columns'>
					<Card className='trending-card' />
				</div>
			</div>
		</div>
	);
};
export default Trending;
