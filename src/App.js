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

function App() {
  return (
    <Router>
    <div>
        <Routes>
            <Route path="/login" element={<Login />}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
