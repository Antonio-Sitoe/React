import React from 'react'
import styled from 'styled-components'
import { SlideProps } from '../pages'

interface SlideItemProps {
  position: number
}

const Section = styled.section`
overflow: hidden; // esconde tudo que pular da tela
`
const Content = styled.div<SlideItemProps>`
  display: flex;
  transition: transform 0.3s ease;
    transform: translateX(${(props) => props.position + 'px'});
`
const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
margin: 1rem auto;
width: 80%;
`
const SlideItem = styled.div`
  width: 80%;// ocupa 80% da tela
  flex-shrink: 0;
  margin: 0 10%;
  padding: 10rem 0;
  background: #eee;
  border-radius: 4px;
  text-align: center;


`


const Slide = ({ slides }: { slides: SlideProps[] }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { width }: any = contentRef.current?.getBoundingClientRect();
    setPosition(-(width * active))
  }, [active])


  function slidePrev() {
    if (active > 0) {
      setActive(active - 1)
    }
  }

  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1)
    }
  }



  return (
    <Section>
      <Content ref={contentRef} position={position} >
        {
          slides.map(({ id, text }) => {
            return <SlideItem key={id}>{text}</SlideItem>
          })
        }
      </Content>
      <Nav>
        <button onClick={slidePrev}>Preview</button>
        <button onClick={slideNext}>Next</button>
      </Nav>
    </Section>
  )
}

export default Slide