import React from 'react'
import slides from './Data'
import { Carousel } from "keep-react";



const Slider = () => {
  return (
    <Carousel  indicatorsType="bar" style={{height:'100dvh'}} indicators={true}  >
      {
        slides.map((slide, i) => (
          <figure
            className='w-full h-full bg-gray-950 relative'
            key={i}>
            <img
              className='object-cover w-full h-full  opacity-75'
              src={slide.img}
              alt="slider"
            />
            <h1 className='absolute top-[50%] -translate-y-[50%] text-white font-bold text-3xl left-14'>{slide.text}</h1>
          </figure>
        ))
      }
    </Carousel>
  )
}

export default Slider
