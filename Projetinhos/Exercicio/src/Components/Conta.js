import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';


function Conta() {

  return (
    <div>
      <h1>Minha conta</h1>

      <nav>
        <li>
          <Link to='criar'>Criar</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}

export default Conta;
