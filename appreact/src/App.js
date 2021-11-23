import React from 'react';
import './style.css';

const App = () => {
  return (
    <form className='container'>
      <input type='text' placeholder='Nome' />
      <input type='text' placeholder='Sobrenome' />
      <input type='email' placeholder='Email' />
      <div className='endereco'>
        <input type='text' placeholder="Rua" />
        <input type='number' placeholder="Numero da casa" />
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;
