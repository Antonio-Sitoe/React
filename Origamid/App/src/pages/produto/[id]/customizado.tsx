import { useRouter } from 'next/router'
import React from 'react'
import HeaderProdutos from '../../../Components/HeaderProdutos'

const customizado = () => {
  const router = useRouter()
  return (
    <HeaderProdutos query={router.query.id}>

      customizado</HeaderProdutos>
  )
}

export default customizado