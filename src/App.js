import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Counter } from './components/Counter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Recipes from './components/Recipes';

function App() {
  return (
    <Router>
    <div className='global-div'>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        <Routes>
            <Route path="/recipes" element={<Recipes />}/>
        </Routes>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
