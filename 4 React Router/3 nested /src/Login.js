import React from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate('/');
  }
  return (
    <form className='anime'>
      <input type='text' name='' id='' placeholder='Email' />
      <input type='password' name='' id='' />
      <button onClick={handleClick}>Logar</button>
    </form>
  );
}

export default Login;
