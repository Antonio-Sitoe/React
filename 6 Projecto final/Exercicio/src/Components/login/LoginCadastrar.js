import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_POST } from '../../Api';
import useFecth from '../../hooks/useFecth';
import useForm from '../../hooks/useForm';
import useLocalStorage from '../../hooks/useLocalStorage';
import { UserContext } from '../../UserContext';
import Input from './Input';
import Style from './Login.module.css';

function LoginCadastrar() {
  const { setLoagado } = React.useContext(UserContext);
  const navigate = useNavigate();
  const { loading, request } = useFecth();
  const [erro, setErro] = React.useState(null);
  const [local, setLocal] = useLocalStorage('token');
  const nome = useForm();
  const email = useForm('email');
  const senha = useForm();

  async function handleCadastro(e) {
    e.preventDefault();
    if (email.validate() && senha.validate() && nome.validate()) {
      setErro(null);
      const { url, options } = USER_POST({
        username: nome.value,
        email: email.value,
        password: senha.value,
      });
      const { response, json } = await request(url, options);
      if (response.ok) {
        setLocal(json.jwt);
        setLoagado(true);
        setErro('Usuario cadastrado');
        navigate('/minhaConta');
      } else {
        const [[{ message }]] = json.message;
        setErro(message);
      }
    } else {
      setErro('Verifique os campos');
    }
  }

  return (
    <form className='animeLeft' onSubmit={handleCadastro}>
      <h1 className={Style.title}>Login</h1>
      <Input type='text' label='Nome' id='nome' placeholder='nome' {...nome} />
      <Input
        type='email'
        id='email'
        label='Email'
        placeholder='Digite um email'
        {...email}
      />
      <Input
        type='password'
        label='Senha'
        id='password'
        placeholder='Senha'
        {...senha}
      />
      {}
      <button className={Style.btn} disabled={loading && loading}>
        cadastrar
      </button>

      {erro && <div>{erro}</div>}
      <p>
        ja tenho conta <Link to='/login'>logar</Link>
      </p>
    </form>
  );
}

export default LoginCadastrar;
