import React from 'react';

function PhotoPost() {
  const [nome, setNome] = React.useState('');
  const [token, setToken] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  const formData = new FormData();
  formData.append('img', img);
  formData.append('peso', peso);
  formData.append('idade', idade);
  formData.append('nome', nome);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Photo post</h2>
      <input
        type='text'
        placeholder='token'
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type='text'
        placeholder='nome'
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type='text'
        placeholder='peso'
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />

      <input
        type='number'
        placeholder='idade'
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type='file' onChange={({ target }) => setImg(target.files[0])} />

      <button>enviar</button>
    </form>
  );
}

export default PhotoPost;
