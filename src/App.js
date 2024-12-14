import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Signup from './components/Signup';
// import Recipes from './components/Recipes';
import Todo from './components/Todo';

function App() {
  return (
    <Router>
    <div className='global-div'>
        <Routes>
            <Route path="/" element={<Todo/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
