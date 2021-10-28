import React from 'react';

function UserPost() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User post</h2>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={({ target }) => setpassword(target.value)}
      />

      <button>enviar</button>
    </form>
  );
}

export default UserPost;
