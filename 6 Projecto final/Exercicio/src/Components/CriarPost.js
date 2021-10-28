import React from 'react';
import { POST_CONTA } from '../Api';
import useFecth from '../hooks/useFecth';
import useForm from '../hooks/useForm';
import useLocalStorage from '../hooks/useLocalStorage';
import Input from './login/Input';

function CriarPost() {
  const nome = useForm(false);
  const textarea = useForm();
  const { data, loading, request } = useFecth();
  const [local, setLocal] = useLocalStorage('token');

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = POST_CONTA(local, {
      nome: nome.value,
      texto: textarea.value,
    });

    const { response, json } = await request(url, options);
    console.log(response);
    console.log(json);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' id='nome' label='Nome' {...nome} />

      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        placeholder='texto'
        value={textarea.value}
        onChange={({ target }) => textarea.setValue(target.value)}
      />
      <button>Criar</button>
    </form>
  );
}

export default CriarPost;
