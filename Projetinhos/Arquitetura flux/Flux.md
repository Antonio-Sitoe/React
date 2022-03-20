
Arquitetura flux com o redux

Um paradigma para controlar o fluxo de dados(informacoes de usuarios, lista de posts, contador) nas nossas aplicacoes. 

No redux temos um store
que e um objecto que contem todos os estados da aplicacao, poucos estados acabam  ficando nos componentes.

Um GlobalStore que ficar.

DEste modo ajuda a compartilhar informacoes entre os componentes, o estado do redux e imutavel.

# Arquitetura 

- componete - faz uma peticao atraves da actions

- Middlewares - faz uma requisicao assincorna e faz busca os dados, ele busca dos dados e envia ao store do redux

- Store - dentro do store encontramos o conjunto de funcoes que chamamos de reducers 

- reducers - ouvem as alteracoes e realizam as alteracoes.

- State - Apartir de todos os reduceres e gerado um unico estado gigante.


Configuracao do redux

instalar 
    ``
        yarn add redux redux-react@next
    ``

Na pasta src do react vamos criar uma pasta. 
dentro do arquivo importamos React, 
importamos createStore que vem do redux
importamos Provider do react-redux

Colocamos o codigo abaixo e depois no Arquivo App.js involvemos o gloabalstore para toda a aplicacao

``
    const store = createStore(() => {});
    export default function GlobalStore({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
``
``
  store / pasta
      index.js / arquivo

``

