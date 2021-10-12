import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>header</h1>
      <nav>
        <NavLink to='/' end>
          Home
        </NavLink>
        <NavLink to='sobre'>Sobre</NavLink>
        <NavLink to='login'>Login</NavLink>
        <h1>Produtos</h1>
        <NavLink to='produto/Notebook'>Notebook</NavLink>
        <NavLink to='produto/Desktop'>Desktop</NavLink>
      </nav>
    </header>
  );
}

export default Header;
