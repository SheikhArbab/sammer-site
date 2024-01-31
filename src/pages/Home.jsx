import React, { useEffect } from 'react'
import reviews from '../components/Testimonials/Data'
import { Slider, Accordion, Card, Testimonials } from '../components/index'

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
      {
        reviews.map((r, i) => (
      <div className="flex bg-red-500 flex-wrap ">
            <Testimonials key={i} image={r.image} title={r.title} quote={r.quote} />
      </div>
        ))
      }
    </>
  )
}

export default Home
