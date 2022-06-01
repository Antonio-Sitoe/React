import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'

const navLinks = [
  {
    href: "/",
    name: 'Home',
    ative: true
  },
  {
    href: "/sobre",
    name: 'Sobre',
    ative: false
  },
  {
    href: "/Login",
    name: 'Login',
    ative: false
  },
  {
    href: "/produto",
    name: 'Produto',
    ative: false
  },
  {
    href: "faq",
    name: '404',
    ative: false
  }


]

export const Nav = styled.nav`
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Header = () => {
  const [ative, setAtive] = React.useState(navLinks)
  const router = useRouter();

  console.log('renderizou')



  function handleAtive(index: number) {
    const newAtive = [...ative]
    newAtive.forEach(a => a.ative = false)

    newAtive[index].ative = true
    setAtive(newAtive)
  }

  useEffect(() => {
    if (router.pathname)
      if (router.pathname.includes('404')) {
        handleAtive(2)
      }
  }, [router])

  React.useEffect(() => {

    ative.forEach(({ href }, i) => {
      if (router.pathname === href) {
        handleAtive(i)
      }
    })


  }, [router.pathname])



  return (
    <div>
      <Nav>
        <ul>
          {ative.map(({ name, href, ative }, index) => {
            return <li key={index}>
              <NavLink href={href} name={name} ative={ative} handleAtive={() => handleAtive(index)} />
            </li>
          })}
        </ul>
      </Nav>
    </div>
  )
}

export default Header