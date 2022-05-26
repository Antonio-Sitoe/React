import React from 'react'
import Slide from '../Components/Slides'

export interface SlideProps {
  id: string
  text: string
}

const slides: SlideProps[] = [
  { id: '1', text: 'slide 1' },
  { id: '2', text: 'slide 2' },
  { id: '3', text: 'slide 3' }
]

function Home() {

  return (
    <div>
      <Slide slides={slides} />
    </div>
  )
}

export default Home