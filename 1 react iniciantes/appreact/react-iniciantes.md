JSX - Javascript extendido, estende o javascript 
dando a ele novas funcionalidades 


import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <a href="www.google.com" className="ativo" title="texte">
        google
      </a>
      <label htmlFor="text"></label>
      <input type="text" id="text" />
    </React.Fragment>
  );
};

export default App;
