import { Data } from "../App"


interface Props {
  data: Data
}

const Produto = ({ data: { nome, preco, fotos } }: Props) => {

  return (
    <>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <img src={fotos[0]?.src} alt={nome} />
    </>
  )
}

export default Produto