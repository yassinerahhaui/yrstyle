import React, { useEffect } from 'react'
import './Carousel.scss'
import { carousel } from '../../data/Carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
// npm install sass react-icons

const Carousel = () => {
  const carouselMapping = (data) => {
    return data.map(x => <CarouselItem key={x.id} data={x} />)
  }
  let lft = 0
  const backBtn = () => {
    const carouselBox = document.querySelector('.carousel-box')
    if (lft <= -100) {
      lft += 100
      carouselBox.style.left = `${lft}%`
    } else {
      lft = -400
      carouselBox.style.left = `${lft}%`
    }
  }
  const nextBtn = () => {
    const carouselBox = document.querySelector('.carousel-box')
    if (lft >= -300) {
      lft -= 100
      carouselBox.style.left = `${lft}%`
    } else {
      lft = 0
      carouselBox.style.left = `${lft}%`
    }
  }
  useEffect(() => {
    let val = setInterval(() => {
      const carouselBox = document.querySelector('.carousel-box')
      if (lft >= -300) {
        carouselBox.style.transition = 'left .5s ease-in'
        lft -= 100
        carouselBox.style.left = `${lft}%`
      } else {
        carouselBox.style.transition = 'none'
        lft = 0
        carouselBox.style.left = `${lft}%`
      }
    }, 10000);
    return ()=> clearInterval(val)
  },[])
  return (
    <div className="box">
      <div className='carousel'>
        <div className="carousel-box">
          {carouselMapping(carousel)}
        </div>
      </div>
      <span className="box_left" onClick={() => backBtn()}><FaAngleLeft /></span>
      <span className="box_right" onClick={() => nextBtn()}><FaAngleRight /></span>
    </div>
  )
}

export default Carousel