
# Os Metodo de classes Acontecem na  :

# inicializacao
componentDidMount()

# Atualizacao
1. shouldComponentUpdate(nextprops, nextstate) - toda vez que existe atualizacao nas propriedades ou estados,  renderiza se alguma coisa.
pode se usar ainda durante a atualizacao doestado.

2. componentDidUpdate(pevProps, prevState) - executado depois da atualizacao do estado, recebe as atualizacaoes antes de ser atualizados

# Finalizacao do component
componentWillUnmount() - limpar os eventListener

