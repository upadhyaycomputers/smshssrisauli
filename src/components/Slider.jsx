import { useState, useEffect } from 'react';

import schoolFront from '../assets/images/school front.jpeg'
import class1 from '../assets/images/class1.jpeg'
import assembly1 from '../assets/images/assembly1.jpeg'

const slides = [
  {
      url: schoolFront,
      alt: 'School Front'
  },
  {
      url: class1,
      alt: 'Class 1'
  },
  {
      url: assembly1,
      alt: 'Assembly 1'
  },
]

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    let autoScroll = setTimeout(() => {
      goNext();
    }, 5000)

    return () => clearTimeout(autoScroll)
  }, [currentIndex])

  return (
    <div className='w-full h-full relative flex'>
      <div className='w-full h-full flex overflow-hidden'>
        {slides.map((slide, index) => (
          <img key={index} src={slide.url} alt={slide.alt} className='w-full h-full object-cover flex-shrink-0 flex-grow-0 slider-image' style={{translate: `${-100*currentIndex}%`}}/>
        ))}       
      </div>   
      
      <div className='absolute top-1/2 translate-y-[-50%] left-4 lg:left-8 text-5xl text-white z-10 cursor-pointer' onClick={goPrevious}>
        <i className="uil uil-angle-left"></i>
      </div>
      <div className='absolute top-1/2 translate-y-[-50%] right-4 lg:right-8 text-5xl text-white z-10 cursor-pointer' onClick={goNext}>
        <i className="uil uil-angle-right"></i>
      </div>

    </div>
  )
}

export default function Slider() {
  return (
    <div className="h-[450px] max-w-7xl mx-auto mt-4 p-4">
      <ImageSlider slides={slides} />
    </div>
  )
}
