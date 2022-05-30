import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import NavLink from "../../Components/NavLink";

const Produtos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap:1rem;
font-family: 'Pacifico', cursive;
`

export default function App({ data }: any) {

  return (
    <Produtos>
      <Head>
        <title>Confira todos os produtos </title>
        <meta name="description" content="A pagina de login" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </Head>

      {data.map((produto: any) => {
        return (
          <div key={produto.id}>
            <img src={produto.fotos[0].src} alt="" width={100} height={100} />
            <NavLink href={`produto/${produto.id}`} name={produto.nome} />
          </div>
        )
      })}
    </Produtos>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const r = await fetch("https://ranekapi.origamid.dev/json/api/produto/")
  const data = await r.json()
  return {
    props: { data }
  }
}