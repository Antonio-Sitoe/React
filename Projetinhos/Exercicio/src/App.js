import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import Login from './Components/login/Login';
import LoginCadastrar from './Components/login/LoginCadastrar';
import LoginPerdeu from './Components/login/LoginPerdeu';
import LoginCriar from './Components/login/LoginCriar';
import Conta from './Components/Conta';
import { UserStorage } from './UserContext';
import Post from './Components/Post';
import CriarPost from './Components/CriarPost';

function App() {
  return (
    <div className='App'>
      <UserStorage>
        <BrowserRouter>
          <Header />

          <div className='content'>
            <Routes>
              <Route path='/' element={<Produtos />} />
              <Route path='contato' element={<Contato />} />
              <Route path='minhaConta/' element={<Conta />}>
                <Route path='' element={<Post />} />
                <Route path='criar' element={<CriarPost />} />
              </Route>
              <Route path='login/' element={<Login />}>
                <Route path='' element={<LoginCriar />} />
                <Route path='cadastrar' element={<LoginCadastrar />} />
                <Route path='perdeu' element={<LoginPerdeu />} />
              </Route>
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
