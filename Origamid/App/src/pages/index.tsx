import Head from 'next/head'
import React from 'react'
import Footer from '../Components/Footer'


function Home() {
  const [ativo, setAtivo] = React.useState(0)


  return (
    <div>
      <Head>
        <title>Pagina inicial </title>
        <meta name="description" content="A pagina de login" />
      </Head>

      <button onClick={() => setAtivo(ativo + 1)}>{ativo}</button>

      <Footer />


    </div>
  )
}

export default Home