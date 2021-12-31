import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;
const Item = styled.div`
  width: 80%;
  flex-shrink: 0;
  background: #eee;
  padding: 10rem 0;
  border-radius: 4px;
  margin: 0 10%;
  text-align: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  width: 80%;
`;

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }
  return (
    <Container>
      <Content
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <Item key={slide.id}>{slide.text}</Item>
        ))}
      </Content>
      <Nav>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </Nav>
    </Container>
  );
};

export default Slide;
