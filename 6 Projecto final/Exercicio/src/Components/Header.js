import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styles from './Header.module.css';

function Header() {
  const { logado } = React.useContext(UserContext);
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink to='/' end className={styles.Link}>
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to='contato' className={styles.Link}>
            Contato
          </NavLink>
        </li>
        <li>
          {logado ? (
            <NavLink to='minhaConta' className={styles.Link}>
              Minha Conta
            </NavLink>
          ) : (
            <NavLink to='login' className={styles.Link}>
              login / cadastro
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
