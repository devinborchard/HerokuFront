import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Signup from './components/Signup';
// import Recipes from './components/Recipes';
import Login from './components/Login';
import Register from './components/Register';


import Top from './components/Top';

function App() {
  return (
    <Router>
    <div className='global-div'>
        <Routes>
            <Route path="/" element={<Top/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
