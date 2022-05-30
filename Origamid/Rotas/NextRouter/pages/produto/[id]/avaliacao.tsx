import { useRouter } from 'next/router'
import React from 'react'
import HeaderProdutos from '../../../Components/HeaderProdutos'

const avaliacao = () => {
  const router = useRouter()
  return (
    <HeaderProdutos query={router.query.id}>
      
      avaliacao</HeaderProdutos>
  )
}

export default avaliacao