import { GetServerSideProps } from "next";
import React from "react";
import styled from "styled-components";
import NavLink from "../../Components/NavLink";

const Produtos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap:1rem;
`

export default function App({ data }) {

  return (
    <Produtos>
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