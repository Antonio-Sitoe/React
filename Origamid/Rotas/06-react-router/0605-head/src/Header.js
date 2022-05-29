import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);

  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="sobre">
        Sobre
      </NavLink>
    </nav>
  );
};

export default Header;
