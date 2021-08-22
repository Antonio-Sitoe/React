import React from "react";
import './style.css'

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const { cliente, idade, compras, ativa } = mario;

  const Total = compras.reduce((acumulado, itemActual) => {
    acumulado += +itemActual.preco.replace('R$', '').trim();
    return acumulado;
  }, 0);

  const situacao = Total > 10_000 ? "Voce Esta a gastar muito" : "";
  return (
    <div>
      <h4>Nome : {cliente}</h4>
      <h4>idade : {idade}</h4>
      <h4>
        Situacao :{" "}
        <span style={ativa ? { color: "blue" } : { color: "red" }}>
          {ativa ? "Ativa" : "Inativa"}
        </span>
      </h4>
      <h4>
        Total Gasto : {Total} <br /> <span>{situacao}</span>
      </h4>
    </div>
  );
};

export default App;
