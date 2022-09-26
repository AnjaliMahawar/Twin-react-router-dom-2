import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Data from './Data';
import Data1 from './Data1';

function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/data' element={<Data/>} />
   <Route path='/data/:id' element={<Data1/>}/>

  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
