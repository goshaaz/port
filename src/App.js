import './App.css';
import Home from './pages/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Home/>
    </div>
    </Router>
  );
}

export default App;
