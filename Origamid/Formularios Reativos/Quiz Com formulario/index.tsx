import React from 'react'
import Radio from '../../Origamid/Formularios Reativos/Form/Radio'
import { perguntas } from './components/Perguntas'

const Home = () => {
  const [radio, setRadio] = React.useState('')
  const [showQuestion, setShowQuestion] = React.useState(0);
  const [hit, setHit] = React.useState(0)

  function handleChangValues(resposta: string) {
    setShowQuestion(showQuestion + 1);
    setRadio('')
    if (radio === resposta) {
      setHit(hit + 1)
    }
  }

  if (showQuestion <= perguntas.length - 1)
    return (
      <div>
        <div>
          {perguntas.map(({ id, options, pergunta, resposta }, i) => {
            return i === showQuestion ?
              <div key={id}>
                <h2>{pergunta}</h2>
                <Radio options={options} value={radio} setValue={setRadio} />
                <button disabled={radio === ''} onClick={() => handleChangValues(resposta)}>Next</button>
              </div>
              : null
          })}
        </div>

      </div>
    )
  return <p>Voce acertou {hit} de {perguntas.length}</p>
}


export default Home