import { Homepage } from './components';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Movies from './components/pages/Movies';
import Detail from './components/pages/Detail';
function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/movies' component={Movies} />
				<Route path='/detail' component={Detail} />
				{/*<Route path='/contact' component={Contact} />
				<Route path='/about' component={About} />*/}
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
