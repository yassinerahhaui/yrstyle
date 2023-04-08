import React, { useEffect } from 'react'
import './ProductSlider.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Dna } from 'react-loader-spinner'
import ProductCard from '../ProductCard/ProductCard'

const ProductSlider = (props) => {
  const products = props.products
  let lft = 0
  const chng = 210

  const backBtn = () => {
    const sliderBox = document.querySelector(`#product-slider_box_${props.ids}`)
    sliderBox.style.left = lft
    lft = parseInt(sliderBox.style.left)
    if (lft <= -chng) {
      lft += chng
      sliderBox.style.left = lft + 'px'
    } else {
      lft = 0
      sliderBox.style.left = lft + 'px'
    }
  }
  const nextBtn = () => {
    const sliderBox = document.querySelector(`#product-slider_box_${props.ids}`)
    sliderBox.style.left = lft
    const screenWidthBox = document.querySelector('.product-box').clientWidth
    const productsMaxWidth = document.querySelector(`#product-slider_box_${props.ids}`).scrollWidth - screenWidthBox
    lft = parseFloat(sliderBox.style.left)
    if (lft >= -productsMaxWidth ) {
      lft -= chng
      sliderBox.style.left = lft + 'px'
    } else {
      lft = -productsMaxWidth
      sliderBox.style.left = lft + 'px'
    }
  }
  return (
    <div className="product-box">
      <div className='product-slider'>
        <div className={`product-slider_box`} id={`product-slider_box_${props.ids}`}>
          {products.isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          /> : products.hasError ? <img
            src="/errors/error-404.png"
            alt="error somthing is wrong!"
            title='error somthing is wrong!'
          /> : products.data.map(el => {
            return <ProductCard key={el.id} data={el} />
          })}
        </div>
      </div>
      {products.isLoading ? '' : products.hasError ? '' : <span className="product-box_left" onClick={() => backBtn()}><FaAngleLeft /></span>}
      {products.isLoading ? '' : products.hasError ? '' : <span className="product-box_right" onClick={() => nextBtn()}><FaAngleRight /></span>}
    </div>
  )
}

export default ProductSlider