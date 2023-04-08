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
  const chng = 100
  const backBtn = () => {
    const carouselBox = document.querySelector('.carousel-box')
    if (lft <= -chng) {
      lft += chng
      carouselBox.style.left = `${lft}%`
    } else {
      lft = -chng * 4
      carouselBox.style.left = `${lft}%`
    }
  }
  const nextBtn = () => {
    const carouselBox = document.querySelector('.carousel-box')
    if (lft >= -chng * 3) {
      lft -= chng
      carouselBox.style.left = `${lft}%`
    } else {
      lft = 0
      carouselBox.style.left = `${lft}%`
    }
  }
  useEffect(() => {
    let val = setInterval(() => {
      const carouselBox = document.querySelector('.carousel-box')
      if (lft >= -chng*3) {
        carouselBox.style.transition = 'left .5s ease-in'
        lft -= chng
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