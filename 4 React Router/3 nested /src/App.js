import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobrw';
import Header from './Header';
import Page404 from './Page404';
import Login from './Login';
import Produto from './Produto';



function App() {
  return (
    <BrowserRouter>
      <div className='d-flex'>
        <Header />
        <div className='element'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='login' element={<Login />} />
            <Route path='produto/:id/*' element={<Produto />}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
