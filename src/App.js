import logo from './logo.svg';
import './App.css';
import { Router} from '@reach/router';
import HomePage from './components/home';
import NumberPage from './components/numbers';
import Colors from './components/colorpage';

function App() {
  return (
    <div className="App">
      <h1>I will always be here, Marc-cus</h1>
      
      <Router>
      <HomePage path="/home"></HomePage>
      <NumberPage path="/:num"></NumberPage>
      <Colors path ="/:word/:color1/:color2"></Colors>

      </Router>
    </div>
  );
}

export default App;
