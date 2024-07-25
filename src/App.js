import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';

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
