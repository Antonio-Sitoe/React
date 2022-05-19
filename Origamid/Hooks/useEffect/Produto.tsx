import React from 'react'


const Produto = () => {

  function handleScroll() {
    console.log('Scroll')
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div>Produto</div>
  )
}

export default Produto