import React from 'react';
import '../Skeleton/css/skeleton.css';
import '../Skeleton/css/normalize.css';
import './Trending.css';
const Trending = () => {
	return (
		<div>
			<h2 className='head'>JONATHAN WICKS</h2>
			<div class='container'>
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
								<button className='btn btn-danger'>
									keanu
								</button>
							</div>
						</div>
						<div className='trending_row'>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<button className='btn btn-danger'>
									keanu
								</button>
							</div>
						</div>
						<div className='trending_row'>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<button className='btn btn-danger'>
									keanu
								</button>
							</div>
						</div>
						<div className='trending_row'>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<button className='btn btn-danger'>
									keanu
								</button>
							</div>
						</div>
					</div>
					<div className='four columns'>
						<h2 className='head'>MOVIE OF THE WEEK</h2>
						<img
							src='./assets/images/madmax.jpg'
							alt='Mowee of the Week'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trending;