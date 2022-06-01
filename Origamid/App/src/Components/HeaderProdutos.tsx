import Link from 'next/link'
import React from 'react'
import { Nav } from './Header'

const HeaderProdutos = ({ children, query }: { children: any, query: string | null }) => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <Link href={`/produto/${query}`}>Produto</Link>
          </li>
          <li>
            <Link href={`/produto/${query}/avaliacao`}>Avaliacao</Link>
          </li>
          <li>
            <Link href={`/produto/${query}/customizado`}>customizado</Link>
          </li>
          <li>
            <Link href={`/produto/${query}/descricao`}>descricao</Link>
          </li>
        </ul>
      </Nav>
      {children}
    </div>
  )
}

export default HeaderProdutos