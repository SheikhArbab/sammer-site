import React, { useEffect } from 'react'
import { Slider, Accordion,Card } from '../components/index'

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
      <Accordion />
      <Card /> 
    </>
  )
}

export default Home
