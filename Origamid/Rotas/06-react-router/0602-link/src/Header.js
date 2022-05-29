import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="sobre">
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="login">
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
