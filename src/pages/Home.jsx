import React, { useEffect } from 'react'
import { Slider, Accordion, Card, Testimonials, About, Blog } from '../components/index'

const Home = ({ setProgress }) => {

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 500);
  }, [])


  return (
    <>
      <Slider />
      <About />
      <Card />
      <Blog />
      <Testimonials />
      <Accordion />
    </>
  )
}

export default Home
