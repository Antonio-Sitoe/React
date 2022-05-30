import { useRouter } from 'next/router'
import React from 'react'
import HeaderProdutos from '../../../Components/HeaderProdutos'

const descricao = () => {
  const router = useRouter()
  return (
    <HeaderProdutos query={router.query.id}>
      
      descricao</HeaderProdutos>
  )
}

export default descricao