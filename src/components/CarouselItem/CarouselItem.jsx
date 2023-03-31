import React from 'react'
import './CarouselItem.scss'

const CarouselItem = (props) => {
  const data = props.data
  return (
    <div className="carousel-item">
      <img src={data.image} className='carousel-item_image' alt={data.title} />
      <div className="carousel-item_caption">
        <h2 className="carousel-item_caption_title">
          {data.title}
        </h2>
        <p className="carousel-item_caption_description">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default CarouselItem