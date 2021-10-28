import React from 'react';
import Input from './Input';

function App() {
  const [cep, SetCep] = React.useState('');
  const [erro, setErro] = React.useState(null);
  const [disable, setDisable] = React.useState(false);

  function Validate(value) {
    if (value.length === 0) {
      setErro('Prencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro('Prencha um Cep valido');
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    console.log(Validate(target.value));
     setDisable(false);
  }
  function hanleChange({ target }) {
    SetCep(target.value);
    if (erro) Validate(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Validate(cep)) {
      console.log('enviar');
      setDisable(true);
    } else {
      console.log('nao enviar');
      setDisable(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        label='cep'
        id='cep'
        value={cep}
        setValue={SetCep}
        placeholder='0000-000'
        onChange={hanleChange}
        onBlur={handleBlur}
      />
      {erro && <p>{erro}</p>}
      <button disabled={disable}>enviar</button>
    </form>
  );
}

export default App;
