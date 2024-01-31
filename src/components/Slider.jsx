import React from 'react'
import { Carousel } from "keep-react";

const slides = [
  {
    img: "https://avatars.mds.yandex.net/i?id=2f7ee1ceb3605673f4dd495f41367bb55aeabe59-11042380-images-thumbs&n=13",
    text: 'Ai Chat Bot services'
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=2f7ee1ceb3605673f4dd495f41367bb55aeabe59-11042380-images-thumbs&n=13",
    text: 'Ai Chat Bot services'
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=2f7ee1ceb3605673f4dd495f41367bb55aeabe59-11042380-images-thumbs&n=13",
    text: 'Ai Chat Bot services'
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=a6df952c5071308413d6609a67d6e43fd0f91a16-9461766-images-thumbs&n=13",
    text: 'Ai Chat Bot services'
  },
]

const Slider = () => {
  return (
    <Carousel indicatorsType="ring" indicators={true}>
      {
        slides.map((slide, i) => (
          <figure
            className='w-full h-[400px] bg-gray-950 relative'
            key={i}>
            <img
              className='object-contain w-full h-full  opacity-75'
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
