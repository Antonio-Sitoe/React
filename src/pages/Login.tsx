import { useRouter } from 'next/router'
import React, { FormEvent } from 'react'

const Login = () => {
  const navigate = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Fazer login')

    setTimeout(() => {
      navigate.push('sobre')
    }, 500)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Login</button>
    </form>
  )
}

export default Login