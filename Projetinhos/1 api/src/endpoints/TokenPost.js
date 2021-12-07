import React from 'react';

function TokenPost() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => setToken(json.token));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>token post</h2>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={({ target }) => setpassword(target.value)}
      />

      <button>enviar</button>
      <p>{token && token}</p>
    </form>
  );
}

export default TokenPost;
