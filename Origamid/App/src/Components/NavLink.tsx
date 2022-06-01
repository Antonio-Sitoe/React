import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Tomato = styled.a<{ ative?: Boolean }>`
  color: ${({ ative }) => ative ? 'tomato' : "#252525"};
  cursor: pointer;
`
interface Props { href: string, name: string, ative?: Boolean, handleAtive?: () => void }


const NavLink = ({ href, name, ative, handleAtive }: Props) => {
  
  return (
    <Link href={href} >
      <Tomato onClick={handleAtive}
        ative={ative}
      >{name}</Tomato>
    </Link>
  )
}

export default NavLink