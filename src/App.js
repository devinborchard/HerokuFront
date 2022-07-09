import './App.css';
import api from './utils/requests'


const getData = async () =>{
  let res = await api()
  console.log('DATA: ', res)
}

function App() {
  return (
    <div className="App">
      <h1>DEVIN'S APP on {`${process.env.REACT_APP_ENV}`}</h1>
      <button onClick ={getData}>get data</button>
    </div>
  );
}

export default App;
