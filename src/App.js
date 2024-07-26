import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';

import Index from './components/index';
import Navbar from './components/navbar';
import Search from './components/search';
import View from './components/view';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<index/>}/>
      <Route path='/navbar'element={<navbar/>}/>
      <Route path='/view'elemant={<search/>}/>
      <Route path='/view'elemant={<view/>}/>

      
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
