import React from 'react';

function PhotoGet() {
  async function handleSum(e) {
    e.preventDefault();

    const r = await fetch('https://dogsapi.origamid.dev/json/api/photo/9371');
    const j = await r.json();
    console.log(j);
  }
  return (
    <form onSubmit={handleSum}>
      <h2>photo get</h2>
      <button>enviar</button>
    </form>
  );
}

export default PhotoGet;
