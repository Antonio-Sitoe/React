import React from 'react';
import Header from './Header';

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
