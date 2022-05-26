import React from 'react'
import Produto from '../components/Produto'
import style from './index.module.css'
import styled from 'styled-components'


const ProdutosContainer = styled.div`
  
  max-width: 600px;
  display: flex;
`

const ProdutoItem = styled.div`
  flex: 1;
`
const Titulo = styled.h1`
  font-size: 2rem;
`

const Paragrapho = styled.p`
  color: green;
`


const Home = () => {
  function template(value, total) {
    console.log(value, total)
  }
  const total = 65
  template`Isso e teste ${total}`
  return (
    <ProdutosContainer>
      <ProdutoItem>
        <Titulo>Meu novo titulo</Titulo>
        <Paragrapho>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nam, obcaecati dolores, consectetur eveniet temporibus id fugiat atque, itaque eius maxime dicta error iusto ducimus dolor minus unde suscipit omnis.</Paragrapho>
      </ProdutoItem>
      <div className={style.Container}>
        <Produto />
      </div>
    </ProdutosContainer >
  )
}

export default Home