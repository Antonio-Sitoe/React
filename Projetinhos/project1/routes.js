import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Repository from './pages/Repository/Repository';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='repository' element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
