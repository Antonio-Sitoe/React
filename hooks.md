Hooks - um dos conceitos fundamentais para trabalhar com programacao funcional, inves de classes sao os hooks. O que que eles sao?

Hooks sao funcioes nativas do React que nos ajudam a trabalhar com o estado e o ciclo de vida de componentes. O que isso quer dizer?

Quando estamos a trabalhar com javascript, muitas das coisas que fazemos mudam, seja para abrir um modal, enviar dados, clicar em um butao, tudo isso, sao coisas que sofrem mutacao, entao e ai onde os hooks ajudam. Para modificar os nossos componentes de maneira facil e intuitiva.

Mas antes de aprofundamos mais nos hooks, a primeira coisa que devemos entender sao o Estados.

Estados - sao a representacao do nosso aplicativo no momento atual, isto e, aquelo que o aplicativo esta agora neste momento, por exemplo temos um butao, o estado daquele botao e de repouso, mais quando clicas no botao o estado do componente se altera para trabalhar de uma outra maneira, seja para chamar dados de uma api externa, seja para abrir um modal, para mostrar um catalogo, seja para qualquer outra coisa.

Em suma, oque devemos entender e que o estado e a representacao do app naquele determinado momento, e os hooks nos ajudam a fazer alteracoes neste estado, entao sempre que queisermos fazer uma lateracao em um elemento no react, nos usamos os hooks, algo que no javascript puro, custumamos fazer por meio de classes, de css. Mais no React e diferente porque nao dependemos de classes, mas sim de hooos para modificar a nossa interface.

O que sa hooks ?
Hooks sao funcoes especias do reacct que permitem controlar o estado e o ciclo de vida dos nossos componentes funcionais.

O primeiro hook que vamos aprender e o useState()

O hook useState(), e uma funcao que retorna uma array com dois valores, sendo a primeira o valor inicial e que sera alterado, esse valor pode ser qualquer tipo de dado, boolean, numberm strings, array e ate mesmo objectos.
e o segundo valor uma funcao atualizadora que vai atualizar o nosso componente caso aconteca algo.

Quando a funcao de modificacao de estado for ativada, todos os componentes que dependem do estado, serao renderizados, novamente e os seus filhos tambem, e isso que vai garantir a reactividade dos componentes no react.

E podemos usar a desestruturacao para chamar o use STATE.


Por convecao usamos a palavra "set" no inicio do nome da funcao atualizadora.

===============
import React from "react";

const App = () => {
const [modal, SetModal] = React.useState(false);

const AbrirModal = () => {
SetModal(true);
};

return (
<>
{modal && <div className="modal">modal aberto</div>}
<button onClick={AbrirModal}>Abrir modal</button>
</>
);
};

export default App;

===============

Multiplos Estados - Nao existem limites para o uso do useState, podemos definir varios, e normalmente podemos definir mais de um para alteracoes em um so componente.

Reactividade - Quando usamos arrays e objectos e comum modificarmos sem querer o primeiro valor, do useState, mais isso esta errado, porque nao promove a reactidade, ele ate pode modificar o valor mais nao vai renderizar na tela, entao e de extrema importancia modificarmos os nossos elementos nas funcoes atualizadoras.

Calback - Nas funcoes atualizadoras podemos passar funcoes como calback, para atualizar o estado. a funcao de callback recebe um parametro que representa o valor anterior e que ira modificar o estado para o valor que for retornado da funcao.

====
import React from "react";

const App = () => {
const [modal, SetModal] = React.useState(false);

const AbrirModal = () => {
SetModal((modal)=>{
return !modal
})
};

return (
<>
{modal && <div className="modal">modal aberto</div>}
<button onClick={AbrirModal}>Abrir modal</button>
</>
);
};

export default App

===
deixe jeito podemos usar o nosso proprio botao para adicionar, e remover a o modal, pois deixe jeito (com calback), temos acesso ao valor anterior. 
