import React from 'react';

const App = () => {
  const ref = React.useRef();
  const [state, setState] = React.useState(null);
  console.log(state);
  React.useEffect(() => {
    const course = Array.from(ref.current.querySelectorAll('section'));

    const objectArray = course.map((item) => {
      return {
        titulo: item.querySelector('h1').innerText,
        descricao: item.querySelector('p').innerText,
        aulas: item.querySelector('.aulas').innerText,
        horas:
          item.querySelector('.horas') &&
          item.querySelector('.horas').innerText,
      };
    });
    setState(objectArray);
  }, []);

  return (
    <div ref={ref}>
      <section className='curso'>
        <h1>Web Design Completo</h1>
        <p>
          Este curso é para quem deseja entrar ou já está no mercado de criação
          de websites.
        </p>
        <span className='aulas'>80</span>
        <span className='horas'>22</span>
      </section>
      <section className='curso'>
        <h1>WordPress Como CMS</h1>
        <p>
          No curso de WordPress Como CMS, você aprende do zero como pegar
          qualquer site em HTML e torná-lo totalmente gerenciável com a
          plataforma do WordPress.
        </p>
        <span className='aulas'>46</span>
        <span className='horas'>9</span>
      </section>
      <section className='curso'>
        <h1>UI Design Avançado</h1>
        <p>Este é um curso avançado de User Interface Design.</p>
        <span className='aulas'>55</span>
      </section>
    </div>
  );
};

export default App;
