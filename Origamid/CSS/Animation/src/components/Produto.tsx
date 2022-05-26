import React from 'react'
import Style from './Produto.module.css'

const Produto = () => {
  return (
    <div className={Style.animeLeft}>
      <h1 className={Style.Titulo}>Notebook</h1>
      <p className={Style.Price}>150 mt</p>
      <button>Comprar</button>
    </div>
  )
}

export default Produto