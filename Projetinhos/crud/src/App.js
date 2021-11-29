import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Pages/User/User';
import UserRegister from './Pages/User/UserRegister';
import UserUpdate from './Pages/User/UserUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
