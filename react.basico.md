# React Element 

Todo elemento REACT e criado com a funcao createElement.  O babel e o responsavel por tranformar o elemento criado com JSX (que se parece com HTML) em funcoes de React.


# Componentes

Permitem voce dividir a sua interface em pequenos lements. sao Criados atraves de funcoes que retornam elementos. Recat ou classes qe extendem React.Componenet e possuem o metoo render retornando um elemento Recat.

- function component
const Button = () => {
 return <button>Comprar</button>
};

- classes componetes
class Button extends React.Component {
 render() {
  return <button>Comprar</button>
 }
};


# Composicao de Componentes.

o princpal motivo de criarmos componentes e para poderms compor a interfacce com diversos componentes que podem ser reutilizados.


# Eventos 

podemos atribuir eventos diretamente ao elementos

# Hooks 

Utilizamos React pela facilidade de sicronizacao do estdo. antes dos hooks, isso so era possivel em componentes criados por meio de classes.

useState() - da um valor e uma funcao para atualizar o valor


# oque vamos usar

Linha de comando;

# webpack
Agrupa o codigo do seu app
permite definirmos os componentes

