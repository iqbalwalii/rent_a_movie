import {Homepage} from './components'
import {Navigation} from './components/Navigation';

import { Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <>
    <Navigation/>
    <Container fluid>
  
    <Homepage/>
  </Container>
  </>

  
  );
}

export default App;
