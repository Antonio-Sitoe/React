import React from 'react';
import { Routes, Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProdutoAvaicao from './ProdutoAvaicao';
import ProdutocUStomizado from './ProdutocUStomizado';
import ProdutoDescricao from './ProdutoDescricao';
const prod = [
  {
    nome: 'Notebook',
    p: 'lorem notebookk',
  },
  {
    nome: 'Desktop',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, rem fuga! Laboriosam facilis laudantium quisquam voluptatem itaque aut quod consequuntur fugiat, ad quibusdam officia saepe odio veniam autem cumque consectetur.',
  },
];

function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1 className='anime'>Produto: {id}</h1>

      <nav>
        <Link to='' end>Descricao</Link>
        <Link to='avaliacao'>avaliacao</Link>
        <Link to='customizado'>customizado</Link>
      </nav>

      <Routes>
        <Route path='' element={<ProdutoDescricao />} />
        <Route path='customizado' element={<ProdutocUStomizado />} />
        <Route path='avaliacao' element={<ProdutoAvaicao />} />
      </Routes>

      {prod.map(({ nome, p }, index) => {
        if (nome === id) return <p key={index}>{p}</p>;
        return null;
      })}
    </div>
  );
}

export default Produto;
