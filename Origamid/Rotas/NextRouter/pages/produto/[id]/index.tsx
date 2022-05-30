import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import HeaderProdutos from "../../../Components/HeaderProdutos";

const Produtos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap:1rem;
`
const SingleProduto = ({ data }: any) => {
  const router = useRouter();
  console.log(router)

  return (
    <HeaderProdutos query={router.query.id}>
      <Head>
        <title>Produto {data.nome}</title>
        <meta name="description" content="A pagina de login" />
      </Head>
      <Produtos>
        <div>
          <img src={data.fotos[0].src} alt="" width={100} />
          <h3>{data.nome}</h3>
          <p>{data.descricao}</p>
          {console.log(data)}
        </div>
      </Produtos>
    </HeaderProdutos>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const r = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${context.query.id}`)
  const data = await r.json()
  return {
    props: { data }
  }
}

export default SingleProduto