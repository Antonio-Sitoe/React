import React from 'react';
import { useNavigate, useParams } from 'react-router';

const UserUpdate = () => {
  const { id } = useParams();
  const n = useNavigate();

  const [form, setForm] = React.useState({
    nome: '',
    sobrenome: '',
    email: '',
    rua: '',
    numero: '',
  });
  React.useEffect(() => {
    fetch(`http://localhost:1337/usuarios/${id}`)
      .then((r) => r.json())
      .then((j) => {
        setForm({
          nome: j.nome,
          sobrenome: j.sobrenome,
          email: j.email,
          rua: j.endereco.rua,
          numero: j.endereco.numero,
        });
      });
  }, [id]);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/usuarios/' + id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        endereco: {
          rua: form.rua,
          numero: form.numero,
        },
      }),
    });

    const json = await response.json();
    console.log(json);
    n('/');
  }
  return (
    <form className='container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nome'
        id='nome'
        value={form.nome}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Sobrenome'
        id='sobrenome'
        value={form.sobrenome}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        id='email'
        value={form.email}
        onChange={handleChange}
      />
      <div className='endereco'>
        <input
          type='text'
          placeholder='Rua'
          id='rua'
          value={form.rua}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Numero da casa'
          value={form.numero}
          onChange={handleChange}
          id='numero'
        />
      </div>
      <button>Update</button>
    </form>
  );
};

export default UserUpdate;
