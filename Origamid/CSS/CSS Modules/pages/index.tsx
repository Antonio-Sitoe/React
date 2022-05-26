import React from 'react'
import Produto from '../components/Produto'
import style from './index.module.css'

const Home = () => {
  return (
    <div>
      <div className={style.Container}>
        <Produto />
      </div>
    </div>
  )
}

export default Home