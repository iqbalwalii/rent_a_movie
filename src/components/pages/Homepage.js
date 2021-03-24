import React from 'react';
import { Jumbotron, Button, Container, Col, Row, Card } from 'react-bootstrap';
import './Homepage.css';
const Homepage = () => {
	return (
		<>
			<Jumbotron>
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p>
					<Button variant='primary'>Learn more</Button>
				</p>
			</Jumbotron>
			<Container>
				<Row>
					<div className='trending'>
						<h2 className='trending_header head'>JONATHAN WICKS</h2>
						<Row className='trending_row'>
							<div className='progress'></div>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<Button className='btn btn-danger'>
									keanu
								</Button>
							</div>
						</Row>
						<Row className='trending_row'>
							<div className='progress'></div>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<Button className='btn btn-danger'>
									keanu
								</Button>
							</div>
						</Row>
						<Row className='trending_row'>
							<div className='progress'></div>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<Button className='btn btn-danger'>
									keanu
								</Button>
							</div>
						</Row>
						<Row className='trending_row'>
							<div className='progress'></div>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<Button className='btn btn-danger'>
									keanu
								</Button>
							</div>
						</Row>
						<Row className='trending_row'>
							<div className='progress'></div>
							<div className='progress_bar'>
								<h4>JOHN WICK</h4>
								<h6>Keanu Himself, Scarlett Johanson</h6>
								<h6>10.0</h6>
								<Button className='btn btn-danger'>
									keanu
								</Button>
							</div>
						</Row>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Homepage;
