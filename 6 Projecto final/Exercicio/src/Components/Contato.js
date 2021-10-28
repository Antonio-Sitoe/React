import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

function Contato() {
  return (
    <section className={`${styles.Contato} animeLeft`}>
      <Head title='contato' content='Entre e contato' />
      <img src={foto} alt='maquina de escrever' />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>andre@gmail.com</li>
          <li>258 848984953</li>
          <li>Rua ali perto</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
