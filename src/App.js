
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

