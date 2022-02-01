import React from 'react';
import './style.css';

const App = () => {
  const [show, setShow] = React.useState(false);
  const box = React.useRef();
  function onMouseOver() {
    setShow(true);
  }
  function onMouseLeave() {
    setShow(false);
  }
  function onMouseMove(e) {
    box.current.style.top = `${e.pageY - 20}px`;
    box.current.style.left = `${e.pageX + 20}px`;
  }

  return (
    <div>
      <div
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        className='mapa'
      />
      {show && (
        <div ref={box} className='box'>
          Endereco proximo ao estacionamento
        </div>
      )}
    </div>
  );
};

export default App;
