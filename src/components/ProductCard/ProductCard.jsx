import React from 'react'
import './ProductCard.scss'

const ProductCard = (props) => {
  const data = props.data
  return (
    <div className='product-card'>
      <img src={data.image} alt={data.title} />
      <div className="product-card_caption">
        <p className="product-card_caption_title">{data.title}</p>
        <div className="product-card_caption_price">{data.price}$</div>
      </div>
    </div>
  )
}

export default ProductCard