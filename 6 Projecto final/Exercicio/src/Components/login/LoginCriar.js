import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_GET } from '../../Api';
import useFecth from '../../hooks/useFecth';
import useForm from '../../hooks/useForm';
import useLocalStorage from '../../hooks/useLocalStorage';
import { UserContext } from '../../UserContext';
import Input from './Input';
import Style from './Login.module.css';

function LoginCriar() {
  const { setLoagado } = React.useContext(UserContext);
  const email = useForm('email');
  const senha = useForm();
  const [local, setLocal] = useLocalStorage('token');
  const navigate = useNavigate();

  const { data, loading, request } = useFecth();
  const [erro, setErro] = React.useState(null);

  async function handleLogin(e) {
    e.preventDefault();

    if (email.validate() && senha.validate()) {
      const { url, options } = USER_GET({
        identifier: email.value,
        password: senha.value,
      });
      const { response, json } = await request(url, options);
      console.log(json);
      if (response.ok) {
        setLocal(json.jwt);
        setErro('Usuario cadastrado');
        setLoagado(true);
        navigate('/minhaConta');
      } else {
        setErro('Usauraio invalido');
      }
    } else {
      setErro('Verifique os campos');
    }
  }
  return (
    <div className='animeLeft'>
      <div className='login'>
        <h1 className={Style.title}>Login</h1>
        <form action='' onSubmit={handleLogin}>
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
          <button className={Style.btn} disabled={loading && loading}>
            Login
          </button>
          {erro && <p>{erro}</p>}
        </form>

        <p>
          Perdeu a senha ?{' '}
          <Link to='perdeu' className={Style.perdi}>
            perdi a senha
          </Link>
        </p>
        <h1 className={Style.title}>Cadastrar</h1>
        <p className={Style.p}>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to='cadastrar' className={Style.btnLink}>
          Cadastrar
        </Link>
      </div>
    </div>
  );
}

export default LoginCriar;
