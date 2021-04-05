import { Homepage } from './components';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<switch>
				<Route path='/' component={Homepage} />
				{/* <Route path='/movies' component={Movies} />
				<Route path='/contact' component={Contact} />
				<Route path='/about' component={About} />
				<Route path='/movie:id' component={MovieItem} /> */}
			</switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
